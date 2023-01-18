import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Login',
    loadChildren: () => import('./Componentes/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'Invoice',
    loadChildren: () => import('./Componentes/invoice/invoice.module').then(m => m.InvoiceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
