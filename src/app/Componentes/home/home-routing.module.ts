import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: 'Invoice',
        loadChildren: () => import('../invoice/invoice.module').then(m => m.InvoiceModule)

      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
