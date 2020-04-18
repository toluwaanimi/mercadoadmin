import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Admin/login/login.component';
import { DashboardNavComponent } from './Components/Admin/dashboard-nav/dashboard-nav.component';
import { DashboardSideComponent } from './Components/Admin/dashboard-side/dashboard-side.component';
import { ErrorComponent } from './Components/Admin/error/error.component';
import { UsersComponent } from './Components/Admin/users/users.component';
import { ProductsComponent } from './Components/Admin/products/products.component';
import { SellersComponent } from './Components/Admin/sellers/sellers.component';
import { ServicesComponent } from './Components/Admin/services/services.component';
import { OrdersComponent } from './Components/Admin/orders/orders.component';
import { DashboardContentComponent } from './Components/Admin/dashboard-content/dashboard-content.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardNavComponent, children:[
      {path: '', component: DashboardContentComponent,pathMatch: 'full'},
      {path: 'products', component: ProductsComponent},
      {path: 'orders', component: OrdersComponent},
      {path: 'sellers', component: SellersComponent},
      {path: 'users', component: UsersComponent},
      {path: 'services', component: ServicesComponent}
    ]},
  {path:"**", component: ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardNavComponent,
    DashboardSideComponent,
    ErrorComponent,
    UsersComponent,
    ProductsComponent,
    SellersComponent,
    ServicesComponent,
    OrdersComponent,
    DashboardContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
