import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetBookComponent } from './components/get-book/get-book.component';
import { GetAllBooksComponent } from './components/getallbook/get-all-books.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component: LoginComponent },
  {path:'dashboard', component: DashboardComponent ,children:[
    {path:'book', component: GetAllBooksComponent},
    {path:'book/:id', component: GetBookComponent},
    {path:'cart', component: CartComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
