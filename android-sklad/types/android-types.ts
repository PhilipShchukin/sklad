export interface Certificate {
    id: string;
    type: string;
    number: string;
    certificateDate: string; 
    productId: string;
  }
  
  export interface ShipmentProduct {
    id: string;
    gtin: string;
    cost: number;
    tax: number;
    currency: string;
    shipmentId: string;
    certificates: Certificate[];
  }
  
  export interface ShipmentLabel {
    id: string;
    code: string;
    shipmentId: string;
  }
  
  export interface ShipmentTask {
    id: string;
    group: string;
    shippingDoc: string;
    nomerTn: string | null;
    country: string;
    agent: number;
    contract: string | null;
    count: number;
    operationDate: string; 
    createdAt: string;
    updatedAt: string;
    products: ShipmentProduct[];
    labels: ShipmentLabel[];
  }

  export type ShipmentsResponse = ShipmentTask[];

  