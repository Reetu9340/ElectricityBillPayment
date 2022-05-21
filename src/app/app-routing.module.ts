import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { ConnectionListComponent } from './connection-list/connection-list.component';
import { CreateConnectionComponent } from './create-connection/create-connection.component';
import { CreateElectricityBillComponent } from './create-electricity-bill/create-electricity-bill.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerNavbarComponent } from './customer-navbar/customer-navbar.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [

{
  path: '',    component: NavbarComponent,    pathMatch: 'full',
},
{
  path: 'create-electricity-bill',  component: CreateElectricityBillComponent,  pathMatch: 'full',
},
{
  path: 'login',  component: LoginComponent,  pathMatch: 'full',
},

{
  path: 'customer-navbar',  component: CustomerNavbarComponent,  pathMatch: 'full',
},
{
  path: 'users',  component: UserListComponent,  pathMatch: 'full',
},
{
  path: 'details/:userId',  component: UserDetailsComponent,  pathMatch: 'full',
},

{
  path: 'update-user/:userId',  component: UpdateUserComponent,  pathMatch: 'full',
},

{
  path: 'customer',  component: CustomerComponent,  pathMatch: 'full',
},
{
  path: 'customer-list',  component: CustomerListComponent,  pathMatch: 'full',
},
{
  path: 'customer-details/:customerId',  component: CustomerDetailsComponent,  pathMatch: 'full',
},
{
  path: 'customer-update/:customerId',  component: UpdateCustomerComponent,  pathMatch: 'full',
},
{
  path: 'connection-list',  component: ConnectionListComponent,  pathMatch: 'full',
},
{
  path: 'create-connection',  component: CreateConnectionComponent,  pathMatch: 'full',
},
{
  path: 'admin-navbar',  component: AdminNavbarComponent,  pathMatch: 'full',
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
