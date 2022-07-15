import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateGuard } from './AuthGaurd/authenticate.guard';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetBookComponent } from './components/get-book/get-book.component';
import { GetAllBooksComponent } from './components/getallbook/get-all-books.component';
import { LoginComponent } from './components/login/login.component';
import { OrderPlacedComponent } from './components/order-placed/order-placed.component';
import { UsereditComponent } from './components/useredit/useredit.component';
import { UserService } from './services/userservice/user.service';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component: LoginComponent },
  {path:'dashboard', component: DashboardComponent ,children:[
    {path:'book', component: GetAllBooksComponent, canActivate:[AuthenticateGuard]},
    {path:'book/:id', component: GetBookComponent, canActivate:[AuthenticateGuard]},
    {path:'cart', component: CartComponent, canActivate:[AuthenticateGuard]},
    {path:'profile', component: UsereditComponent, canActivate:[AuthenticateGuard]},
    {path:'success', component: OrderPlacedComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
