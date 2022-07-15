import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  get_token(){
    return !!localStorage.getItem('token');
  }
}
