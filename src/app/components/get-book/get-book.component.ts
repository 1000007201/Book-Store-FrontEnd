import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/authservice/auth.service';
import { BookService } from 'src/app/services/bookservice/book.service';
import { CartService } from 'src/app/services/cartservice/cart.service';

@Component({
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrls: ['./get-book.component.scss']
})
export class GetBookComponent implements OnInit {
  data:any;
  id:any;
  added:boolean=false;
  cart_data:any;
  description:string='';
  checkArray:Array<any>=[];
  uncheckArray:Array<any>=[];
  submitted:boolean=false;
  rating:any;
  unrating:any;

  constructor(private book:BookService, private route:ActivatedRoute, private cart:CartService) { }

  ngOnInit(): void {
    this.get_book();
  }
  get_book(){
    this.id = this.route.snapshot.params['id']
    this.book.getBook(this.id).subscribe((res:any)=>{
      this.data=res.Data;
      console.log(res.Data);
    })
  }
  addCart(book_id:any){
    let data={
      'book_id': book_id,
      'quantity': 1
    }
    this.cart.add_cart(data).subscribe((res:any)=>{
      console.log(res);
      this.get_cart(res.cart_id)
      this.added=true;
    })
  }
  get_cart(cart_id:any){
    this.cart.getCart(cart_id).subscribe((res:any)=>{
      console.log(res);
      this.cart_data=res.Data;
    })
  }
  inc_quantity(quantity:any, cart_id:any){
    quantity = quantity + 1
    let data ={
      'quantity': quantity
    }
    this.cart.updateCart(data, cart_id).subscribe((res)=>{
      console.log(res)
      this.get_cart(cart_id);
    })
    
  }
  dec_quantity(quantity:any, cart_id:any){
    if (quantity <= 1){
      return
    }
    else{
      quantity = quantity - 1
      let data={
        'quantity': quantity
      }
      this.cart.updateCart(data, cart_id).subscribe((res)=>{
        console.log(res)
        this.get_cart(cart_id);
      })
    }
  }
  add_rate(rate:any){
    this.rating=rate;
    this.unrating= 5-rate
    console.log(this.rating, this.unrating)
  }
  add_review(){
    for (var i=1; i<=this.rating; i++){
      this.checkArray.push(i)
    }
    for (var j=1; j<= this.unrating; j++){
      this.uncheckArray.push(j)
    }
    this.submitted=true;
  }

}
