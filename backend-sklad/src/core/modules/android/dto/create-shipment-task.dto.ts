import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

class CertificateDto {
  @IsString()
  certificate_type: string;

  @IsString()
  certificate_number: string;

  @IsDateString()
  certificate_date: string;
}

class ProductDto {
  @IsString()
  product_cost: string;

  @IsString()
  product_tax: string;

  @IsString()
  product_currency: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CertificateDto)
  certificate_document_data?: CertificateDto[];
}

export class CreateShipmentTaskDto {
  @IsString()
  group: string;

  @IsString()
  shipping_doc: string;

  @IsOptional()
  @IsString()
  nomer_tn?: string;

  @IsString()
  country: string;

  @IsNumber()
  agent: number;

  @IsOptional()
  @IsString()
  contract?: string;

  @IsNumber()
  count: number;

  @IsDateString()
  operation_date: string;

  @IsObject()
  eas_products: Record<string, ProductDto>;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  labels?: string[];
}
