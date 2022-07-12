import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss']
})
export class DisplayBookComponent implements OnInit {

  @Input() childMessage: any;
  
  constructor(private route:Router) { }

  ngOnInit(): void {
    console.log(this.childMessage);
  }
  book_by_id(id:any){
    this.route.navigateByUrl('dashboard/book/'+id);
  }

}
