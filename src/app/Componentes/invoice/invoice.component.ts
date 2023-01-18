import { Component } from '@angular/core';
import { catchError, filter, map, Observable } from 'rxjs';
import { BaseResponse } from 'src/app/Common/Response';
import { Invoice } from 'src/app/Models/InvoiceModel.interface';
import { InvoiceService } from 'src/app/Services/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {

  listInvoices!: Observable<Invoice[]>;

  constructor(private invoiceSVC: InvoiceService) { }


  public GetInvoices(): void {
    this.listInvoices = this.invoiceSVC.GetInvoices().pipe(
      filter((res: BaseResponse<Invoice[]>) => {
        if (res.Result) {
          return true;
        } else {
          return false;
        }
      }),
      map((res: BaseResponse<Invoice[]>) => res.Data),
      catchError(res => [])
    );
  }
}
