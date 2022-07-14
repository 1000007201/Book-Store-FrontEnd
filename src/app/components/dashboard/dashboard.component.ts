import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/dataservice/data.service';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user_details:any;
  message:any;
  search_text:string=''

  constructor(private user:UserService, private data:DataService) { }

  ngOnInit(): void {
    this.get_user()
  }
  get_user(){
    this.user.getUser().subscribe((res:any)=>{
      console.log(res)
      this.user_details=res.Data;
      this.data.changeMessage(this.user_details)
    })
  }
  onKeyUp(event:any){
    this.search_text = event.target.value
    this.data.changeSearch(this.search_text)
  }
}
