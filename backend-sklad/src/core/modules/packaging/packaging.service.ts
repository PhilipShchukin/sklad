import { CodeStatus } from '@/prisma/generated';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreatePackagingDto } from './dto/create-packaging.dto';
import { MoveBoxDto } from './dto/move-code.dto';

@Injectable()
export class PackagingService {
  constructor(private prisma: PrismaService) {}

  async createReport(dto: CreatePackagingDto) {
    const transactionResult = await this.prisma.$transaction(async (prisma) => {
      // Проверки ДО создания report
      const allProductCodes = dto.units.boxes.flatMap((box) => box.products);
      const existingCodes = await prisma.codes.findMany({
        where: { code: { in: allProductCodes } },
        select: { code: true },
      });

      if (existingCodes.length > 0) {
        throw new ConflictException(`Найдены существующие коды в БД`);
      }

      // 1. Создаем Report
      const report = await prisma.reports.create({
        data: {
          startDate: new Date(dto.StartDate),
          endDate: new Date(dto.EndDate),
          gtin: dto.gtin,
          manufactureDate: dto.ManufactureDate,
          bbd: dto.BBD,
          batch: dto.Batch,
          name: dto.Name,
          description: dto.description,
        },
      });

      // 2. Мапим паллеты
      const palletMap = new Map<
        string,
        { palletNumber: number; palletLabel: string }
      >();
      dto.units.pallets.forEach((p, index) => {
        p.boxes.forEach((boxName) => {
          palletMap.set(boxName, {
            palletNumber: index + 1,
            palletLabel: p.name,
          });
        });
      });

      // 3. Сохраняем все продукты (codes)
      for (let i = 0; i < dto.units.boxes.length; i++) {
        const box = dto.units.boxes[i];
        const boxNumber = i + 1;

        for (const productCode of box.products) {
          const pallet = palletMap.get(box.name);

          await prisma.codes.create({
            data: {
              code: productCode,
              gtin: report.gtin,
              boxNumber,
              boxLabel: box.name,
              palletNumber: pallet?.palletNumber ?? null,
              palletLabel: pallet?.palletLabel ?? null,
              reportId: report.id,
            },
          });
        }
      }

      return report; // Возвращаем report из транзакции
      // return true; // Возвращаем report из транзакции
    });

    return transactionResult; // Возвращаем результат транзакции
    // return true; // Возвращаем результат транзакции
  }

  async getAllReport() {
    const allReport = this.prisma.reports.findMany({
      include: { codes: true },
    });

    if (!allReport) {
      throw new NotFoundException('Не удалось получить файлы фасовок');
    }

    return allReport;
  }

  async moveBox(dto: MoveBoxDto) {
    //Передвижение коробки по паллетам
    const { boxNumber, reportId, newPalletNumber, newPalletLabel } = dto;

    const result = await this.prisma.codes.updateMany({
      where: {
        boxNumber,
        reportId,
      },
      data: {
        palletNumber: newPalletNumber ?? null,
        palletLabel: newPalletLabel ?? null,
      },
    });

    if (result.count === 0) {
      throw new NotFoundException('Box not found in this report');
    }

    return { success: true, updatedCount: result.count };
  }

  async deleteDB() {
    const deleteCodes = await this.prisma.codes.deleteMany({});
    const deleteReports = await this.prisma.reports.deleteMany({});

    if (
      (!deleteCodes || deleteCodes.count === 0) &&
      (!deleteReports || deleteReports.count === 0)
    ) {
      throw new NotFoundException('Не удалось удалить базу данных');
    }
    return true;
  }

  async getAvailablePalletsForBox(reportId: string, boxNumber: number) {
    // Доступность паллет, для конкретной коробки, не включая собственную
    // сначала узнаём, на какой паллете сейчас эта коробка
    const currentBox = await this.prisma.codes.findFirst({
      where: { reportId, boxNumber },
      select: { palletNumber: true },
    });

    if (!currentBox) {
      throw new NotFoundException('Коробка не найдена');
    }

    // теперь достаём все уникальные паллеты для этой фасовки, кроме текущей
    const pallets = await this.prisma.codes.findMany({
      distinct: ['palletNumber'],
      where: {
        reportId,
        palletNumber: {
          not: currentBox.palletNumber,
          // not: null,
        },
      },
      select: {
        palletNumber: true,
      },
    });

    return pallets.map((p) => p.palletNumber);
  }

  async changeBoxStatus(
    reportId: string,
    boxNumber: number,
    statusChange: CodeStatus,
  ) {
    const changeStatus = await this.prisma.codes.updateMany({
      where: { reportId, boxNumber },
      data: {
        status: statusChange,
      },
    });
    if (changeStatus.count === 0) {
      throw new NotFoundException('Коробка не найдена');
    }

    return changeStatus;
  }
  async getBoxStatus(reportId: string, boxNumber: number) {
    const changeStatus = await this.prisma.codes.findFirst({
      where: { reportId, boxNumber },
      select: {
        status: true,
      },
    });
    if (!changeStatus) {
      throw new NotFoundException('Статус коробки не найден');
    }
    const allStatuses = Object.values(CodeStatus);
    const availableStatuses = allStatuses.filter(
      (status) => status !== changeStatus.status,
    );

    return availableStatuses;
  }

  async deletePalletForBox(reportId: string, boxNumber: number) {
    const changeStatus = await this.prisma.codes.updateMany({
      where: { reportId, boxNumber },
      data: {
        palletNumber: null,
        palletLabel: null,
      },
    });
    if (!changeStatus) {
      throw new NotFoundException('Коробка не найдена');
    }
    return true;
  }
}
