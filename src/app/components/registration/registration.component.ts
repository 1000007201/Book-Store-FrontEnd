import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  name:string='';
  username:string='';
  email:string='';
  password:string='';

  constructor(private user:UserService) { }

  ngOnInit(): void {
  }
  submit(){
    let data={
      'first_name': this.name,
      'username': this.username,
      'email': this.email,
      'password': this.password,
      'confirm_password': this.password
    }
    console.log('API call')
    this.user.register(data).subscribe(res=>{
      console.log(res);
    })
  }

}
