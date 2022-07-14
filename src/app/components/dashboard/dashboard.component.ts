import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user_details:any;

  constructor(private user:UserService) { }

  ngOnInit(): void {
    this.get_user();
  }
  get_user(){
    this.user.getUser().subscribe((res:any)=>{
      console.log(res)
      this.user_details=res.Data;
    })
  }

}
