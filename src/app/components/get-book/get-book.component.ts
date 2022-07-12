import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { BookService } from 'src/app/services/bookservice/book.service';

@Component({
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrls: ['./get-book.component.scss']
})
export class GetBookComponent implements OnInit {
  data:any;
  id:any;

  constructor(private book:BookService, private route:ActivatedRoute) { }

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

}
