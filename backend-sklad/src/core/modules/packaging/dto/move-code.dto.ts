// dto/move-box.dto.ts
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class MoveBoxDto {
  @IsNotEmpty()
  @IsNumber()
  boxNumber: number;

  @IsNotEmpty()
  @IsString()
  reportId: string;

  @IsOptional()
  @IsNumber()
  newPalletNumber?: number | null;

  @IsOptional()
  @IsString()
  newPalletLabel?: string | null;
}
