import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/dataservice/data.service';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.scss']
})
export class UsereditComponent implements OnInit {
  user_details:any;
  edit_flag:boolean=false;

  constructor(private data:DataService, private user:UserService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe((message:any)=>{
      this.user_details=message;
      console.log('aaa')
      console.log(this.user_details);
    })
  }
  edit(){
    this.edit_flag=true;
  }
  cancel(){
    this.edit_flag=false;
  }
  submit(){
    let data={
      'first_name': this.user_details.first_name,
      'last_name': this.user_details.last_name,
      'username': this.user_details.username,
      'email': this.user_details.email
    }
    this.user.updateUser(data).subscribe((res:any)=>{
      console.log(res);
    })
  }

}
