import { Body, Controller, Get, Post } from '@nestjs/common';
import { AndroidService } from './android.service';
import { CreateShipmentTaskDto } from './dto/create-shipment-task.dto';

@Controller('android')
export class AndroidController {
  constructor(private readonly androidService: AndroidService) {}

  @Post('create')
  async create(@Body() dto: CreateShipmentTaskDto) {
    return this.androidService.createShipmentTask(dto);
  }

  @Get('find-all')
  async findAll() {
    return this.androidService.getAllShipments();
  }
}
