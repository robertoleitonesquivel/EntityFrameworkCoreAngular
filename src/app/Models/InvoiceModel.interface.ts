export interface Invoice {
  Id: number;
  Monto: number;
  Fecha: Date;
  InvoiceLines: InvoiceLine[];
}

export interface InvoiceLine {
  Id: number;
  Quantity: number;
  Price: number;
  LineTotal: number;
}
