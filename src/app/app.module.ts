import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ProductosComponent } from './Components/admin/productos/productos.component';
import { QuejasComponent } from './Components/admin/quejas/quejas.component';
import { PedidosComponent } from './Components/admin/pedidos/pedidos.component';
import { MyordersComponent } from './Components/myorders/myorders.component';
import { LoginComponent } from './Components/login/login.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import { FilterPipe } from './Pipes/filter.pipe';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProductosComponent,
    QuejasComponent,
    PedidosComponent,
    MyordersComponent,
    LoginComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    AlifeFileToBase64Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
