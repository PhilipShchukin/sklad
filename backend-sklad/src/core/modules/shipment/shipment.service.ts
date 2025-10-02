import { PrismaService } from '@/src/core/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ShipmentService {
  constructor(private prisma: PrismaService) {}

  // 1. Список уникальных продуктов
  async getUniqueProducts() {
    const products = await this.prisma.reports.groupBy({
      by: ['gtin', 'name'],
    });

    // на фронт отправляем только имя и gtin
    return products.map((p) => ({
      gtin: p.gtin,
      name: p.name,
    }));
  }

  // 2. Количество доступных кодов IN_STOCK
  async getStockByGtin(gtin: string) {
    const count = await this.prisma.codes.count({
      where: { gtin, status: 'IN_STOCK' },
    });

    return { gtin, count };
  }
}
