import { Type } from 'class-transformer';
import { IsArray, IsString, Length, ValidateNested } from 'class-validator';

export class BoxUnitDto {
  @IsString()
  name: string;

  @IsArray()
  @IsString({ each: true })
  products: string[];
}

export class PalletUnitDto {
  @IsString()
  name: string;

  @IsArray()
  @IsString({ each: true })
  boxes: string[];
}

export class UnitsDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BoxUnitDto)
  boxes: BoxUnitDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PalletUnitDto)
  pallets: PalletUnitDto[];
}

export class CreatePackagingDto {
  //   @IsDate({ message: 'Неверный формат даты начала фасовки' })
  StartDate: string;

  //   @IsDate({ message: 'Неверный формат даты окочнчания фасовки' })
  EndDate: string;

  @IsString({ message: 'GTIN должен быть строчкой' })
  @Length(14, 14, { message: 'GTIN должен быть 14 символов' })
  gtin: string;

  @IsString()
  ManufactureDate: string;

  @IsString()
  BBD: string;

  @IsString()
  Batch: string;

  @IsString({ message: 'NAME должен быть строчкой' })
  Name: string;

  @IsString()
  description: string;

  @ValidateNested()
  @Type(() => UnitsDto)
  units: UnitsDto;

  //   units: {
  //     boxes: {
  //       name: string;
  //       products: string[];
  //     }[];
  //     pallets: {
  //       name: string;
  //       boxes: string[];
  //     }[];
  //   };
}
