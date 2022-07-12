import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/bookservice/book.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {
  Message:any;

  constructor(private book:BookService) { }

  ngOnInit(): void {
    this.all_books();
  }
  all_books(){
    console.log('Api calling')
    this.book.getAllBooks().subscribe((res:any)=>{
      console.log(res.Data)
      this.Message=res.Data

    })
  }

}
