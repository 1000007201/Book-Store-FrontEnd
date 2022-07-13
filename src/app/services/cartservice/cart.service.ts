import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  token:any=localStorage.getItem('token')

  constructor(private http:HttpService) { }

  getAllCart(){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Token': this.token
      })
    }
    return this.http.getService('cart/add/cart/', true, header)
  }
  updateCart(data:any, cart_id:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Token': this.token
      })
    }
    return this.http.patchService('cart/update/cart/'+cart_id, data, true, header)
  }
  delete_cart(cart_id:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Token': this.token
      })
    }
    return this.http.deleteService('cart/update/cart/'+cart_id, true, header)
  }
  add_cart(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Token': this.token
      })
    }
    return this.http.postService('cart/add/cart/', data, true, header)
  }
  getCart(cart_id:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Token': this.token
      })
    }
    return this.http.getService('cart/add/cart/'+cart_id, true, header)
  }
}
