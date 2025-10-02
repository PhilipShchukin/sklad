// import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';

// import { PackagingModule } from '@/src/core/modules/packaging/packaging.module';
// import { AuthModule } from './modules/auth/auth.module';
// import { DataModule } from './modules/data/data.module';
// import { ShipmentModule } from './modules/shipment/shipment.module';
// import { PrismaModule } from './prisma/prisma.module';

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true,
//     }),

//     PrismaModule,
//     PackagingModule,
//     ShipmentModule,
//     AuthModule,
//     DataModule,
//   ],
// })
// export class CoreModule {}

// src/core/core.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AndroidModule } from './modules/android/android.module';
import { AuthModule } from './modules/auth/auth.module';
import { DataModule } from './modules/data/data.module';
import { PackagingModule } from './modules/packaging/packaging.module';
import { ShipmentModule } from './modules/shipment/shipment.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    PackagingModule,
    ShipmentModule,
    AuthModule,
    DataModule,
    AndroidModule,
  ],
})
export class CoreModule {}
