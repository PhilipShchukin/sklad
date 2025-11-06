import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module';
import { DataController } from './data.controller';
import { DataService } from './data.service';

@Module({
  imports: [ConfigModule, AuthModule],
  controllers: [DataController],
  providers: [DataService],
})
export class DataModule {}
