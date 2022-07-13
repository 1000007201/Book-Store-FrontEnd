import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  token:any=localStorage.getItem('token')

  constructor(private http:HttpService) { }

  checkout(cart_id:any, data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Token': this.token
      })
    }
    return this.http.postService('order/checkout/'+cart_id, data, true, header)
  }
}
