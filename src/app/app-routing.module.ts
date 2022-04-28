import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from './Components/admin/pedidos/pedidos.component';
import { ProductosComponent } from './Components/admin/productos/productos.component';
import { QuejasComponent } from './Components/admin/quejas/quejas.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MyordersComponent } from './Components/myorders/myorders.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch:'full'
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'admin/productos',
    component: ProductosComponent
  },
  {
    path: 'admin/quejas',
    component: QuejasComponent
  },
  {
    path: 'admin/pedidos',
    component: PedidosComponent
  },
  {
    path: 'mis-ordenes',
    component: MyordersComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
