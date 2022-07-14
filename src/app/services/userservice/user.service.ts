import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any=localStorage.getItem('token');

  constructor(private http:HttpService) { }

  login(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.postService('account/login/', data, false, header);
  }
  register(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.postService('account/registration/', data, false, header)
  }
  getUser(){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Token': this.token
      })
    }
    return this.http.getService('account/get/user/', true, header)
  }
  updateUser(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Token': this.token
      })
    }
    return this.http.patchService('account/update/user/', data, true, header)
  }
}
