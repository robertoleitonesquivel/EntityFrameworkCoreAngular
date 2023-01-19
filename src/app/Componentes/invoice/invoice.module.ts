import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './invoice.component';
import { MaterialModule } from 'src/app/Common/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InvoiceRoutingModule } from './invoice-routing.module';



@NgModule({
  declarations: [
    InvoiceComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class InvoiceModule { }
