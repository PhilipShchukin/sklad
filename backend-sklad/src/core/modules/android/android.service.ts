import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AndroidService {
  constructor(private prisma: PrismaService) {}

  async createShipmentTask(data: any) {
    return this.prisma.shipmentTask.create({
      data: {
        group: data.group,
        shippingDoc: data.shipping_doc,
        nomerTn: data.nomer_tn ?? null,
        country: data.country,
        agent: data.agent,
        contract: data.contract ?? null,
        count: Number(data.count),
        operationDate: new Date(data.operation_date),

        // вложенные продукты
        products: {
          create: Object.entries(data.eas_products).map(
            ([gtin, product]: [string, any]) => ({
              gtin,
              cost: parseFloat(product.product_cost),
              tax: parseFloat(product.product_tax),
              currency: product.product_currency,

              // сертификаты (если есть)
              certificates: product.certificate_document_data
                ? {
                    create: product.certificate_document_data.map(
                      (cert: any) => ({
                        type: cert.certificate_type,
                        number: cert.certificate_number,
                        certificateDate: new Date(cert.certificate_date),
                      }),
                    ),
                  }
                : undefined,
            }),
          ),
        },

        // labels (если есть)
        labels: data.labels
          ? {
              create: data.labels.map((label: string) => ({
                code: label,
              })),
            }
          : undefined,
      },
      include: {
        products: {
          include: {
            certificates: true,
          },
        },
        labels: true,
      },
    });
  }

  async getAllShipments() {
    return this.prisma.shipmentTask.findMany({
      include: {
        products: {
          include: {
            certificates: true,
          },
        },
        labels: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}
