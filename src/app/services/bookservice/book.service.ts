import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpService) { }
  getAllBooks(){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.getService('book/get/', false, header)
  }
  getBook(id:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.getService('book/get/one/'+id, false, header)
  }
  getBookByPage(page_number:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://localhost:4200'
      })
    }
    console.log(page_number)
    return this.http.getService('book/get/'+page_number, false, header)
  }
}
