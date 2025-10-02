import { Controller, Post } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Post('agents')
  async getAgents() {
    return this.dataService.getAgentsList();
  }
}
