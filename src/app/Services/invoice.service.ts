import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Common } from '../Common/common';
import { BaseResponse } from '../Common/Response';
import { Invoice } from '../Models/InvoiceModel.interface';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  public GetInvoices(): Observable<BaseResponse<Invoice[]>> {
    return this.http.get<BaseResponse<Invoice[]>>(`${Common.Url}api/Invoice`)
  }
}
