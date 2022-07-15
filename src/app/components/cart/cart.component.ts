import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cartservice/cart.service';
import { OrderService } from 'src/app/services/orderservice/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  Data:any;
  disable:boolean=false;
  cart_id:any;
  place_order:boolean=false;
  address:string='';
  continue:boolean=false;
  cart_data:any;

  constructor(private cart:CartService, private order:OrderService, private route:Router) { }

  ngOnInit(): void {
    this.get_all_cart();
  }
  get_all_cart(){
    this.cart.getAllCart().subscribe((res:any)=>{
      console.log(res);
      this.Data=res.Data;
    })
  }
  inc_quantity(quantity:any, cart_id:any){
    quantity = quantity + 1
    let data ={
      'quantity': quantity
    }
    this.cart.updateCart(data, cart_id).subscribe((res)=>{
      console.log(res)
      this.get_all_cart()
    })
    
  }
  dec_quantity(quantity:any, cart_id:any){
    if (quantity <= 1){
      this.disable=true;
    }
    else{
      quantity = quantity - 1
      let data={
        'quantity': quantity
      }
      this.cart.updateCart(data, cart_id).subscribe((res)=>{
        console.log(res)
        this.get_all_cart()
      })
    }
  }
  deleteCart(cart_id:any){
    this.cart.delete_cart(cart_id).subscribe((res)=>{
      console.log(res)
      this.get_all_cart()
    })
  }
  placeOrder(cart_id:any){
    this.cart_id=cart_id;
    this.place_order=true;
  }
  continue_button(){
    this.cart.getCart(this.cart_id).subscribe((res:any)=>{
      console.log(res)
      this.cart_data=res.Data
      this.continue=true;
    })
  }
  checkout_button(cart_id:any){
    let data={
      'address': this.address
    }
    this.order.checkout(cart_id, data).subscribe((res)=>{
      console.log(res)
      this.route.navigateByUrl('/dashboard/success')
    })
  }

}
