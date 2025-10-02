import { CodeStatus, Prisma } from '@/prisma/generated';
import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { CreatePackagingDto } from './dto/create-packaging.dto';
import { MoveBoxDto } from './dto/move-code.dto';
import { PackagingService } from './packaging.service';

// type ReportWithCodes = Reports & {
//   codes: Codes[];
// };

type ReportWithCodes = Prisma.ReportsGetPayload<{
  include: { codes: true };
}>;

@Controller('packaging')
export class PackagingController {
  constructor(private readonly packagingService: PackagingService) {}

  @Post('create')
  async uploadReport(@Body() dto: CreatePackagingDto) {
    return this.packagingService.createReport(dto);
  }

  @Get()
  async getAllReport(): Promise<ReportWithCodes[]> {
    return this.packagingService.getAllReport();
  }
  @Patch('move')
  moveBox(@Body() dto: MoveBoxDto) {
    return this.packagingService.moveBox(dto);
  }

  @Delete('delete')
  async deleteDB(): Promise<boolean> {
    return this.packagingService.deleteDB();
  }

  @Post('pallets/available')
  async getAvailablePallets(
    @Body() body: { reportId: string; boxNumber: number },
  ) {
    return this.packagingService.getAvailablePalletsForBox(
      body.reportId,
      body.boxNumber,
    );
  }

  @Post('change/box-status')
  async changeBoxStatus(
    @Body() body: { reportId: string; boxNumber: number; status: CodeStatus },
  ) {
    return this.packagingService.changeBoxStatus(
      body.reportId,
      body.boxNumber,
      body.status,
    );
  }

  @Post('get/box-status')
  async getBoxStatus(@Body() body: { reportId: string; boxNumber: number }) {
    return this.packagingService.getBoxStatus(body.reportId, body.boxNumber);
  }

  @Post('delete-pallet-box')
  async deletePalletForBox(
    @Body() body: { reportId: string; boxNumber: number },
  ) {
    return this.packagingService.deletePalletForBox(
      body.reportId,
      body.boxNumber,
    );
  }
}
