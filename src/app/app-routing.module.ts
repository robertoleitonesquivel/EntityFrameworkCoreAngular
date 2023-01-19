import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componentes/home/home.component';
import { LoginComponent } from './Componentes/login/login.component';
import { NotFoundComponent } from './Componentes/notfound/notfound.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/SignIn', pathMatch: 'full'
  },
  {
    path: 'SignIn', component: LoginComponent, pathMatch: 'full'
  },
  {
    path: 'Home',
    loadChildren: () => import('./Componentes/home/home.module').then(m => m.HomeModule),
  },
  {
    path: '**', component: NotFoundComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
