import { Body, Controller, Get, Post } from '@nestjs/common';
import { ShipmentService } from './shipment.service';

@Controller('shipment')
export class ShipmentController {
  constructor(private readonly shipmentService: ShipmentService) {}

  @Get()
  async getUniqueProducts() {
    return this.shipmentService.getUniqueProducts();
  }

  // @Get('stock')
  // async getStock(@Body() body: { gtin: string }) {
  //   return this.shipmentService.getStockByGtin(body.gtin);
  // }

  @Post('stock')
  async getStock(@Body('gtin') gtin: string) {
    return this.shipmentService.getStockByGtin(gtin);
  }
}
