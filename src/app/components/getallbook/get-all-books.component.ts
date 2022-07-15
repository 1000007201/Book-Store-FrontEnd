import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/bookservice/book.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {
  Message:any;
  next_page:boolean=false;
  prev_page:boolean=false;
  next:any;
  prev:any;

  constructor(private book:BookService) { }

  ngOnInit(): void {
    this.all_books();
  }
  all_books(){
    console.log('Api calling')
    this.book.getAllBooks().subscribe((res:any)=>{
      console.log(res)
      if ('next_page' in res){
        this.next_page = true;
        this.next = res.next_page;
      }
      if ('prev_page' in res){
        this.prev_page = true;
        this.prev = res.prev_page;
      }
      this.Message=res.Data
    })
  }
  get_next(next_:any){
    console.log('Api calling')
    console.log(next_)
    this.book.getBookByPage(next_).subscribe((res:any)=>{
      console.log(res)
      if ('next_page' in res){
        this.next_page = true;
        this.next = res.next_page;
      }
      else{
        this.next_page = false
      }
      if ('prev_page' in res){
        this.prev_page = true;
        this.prev = res.prev_page;
      }
      else{
        this.prev_page = false
      }
      this.Message=res.Data
    })
  }
  // get_prev(prev:any){
  //   console.log('Api calling')
  //   this.book.getBookByPage().subscribe((res:any)=>{
  //     console.log(res)
  //     if ('next_page' in res){
  //       this.next_page = true;
  //       this.next = res.next_page;
  //     }
  //     if ('prev_page' in res){
  //       this.prev_page = true;
  //       this.prev = res.prev_page;
  //     }
  //     this.Message=res.Data
  //   })
  // }

}
