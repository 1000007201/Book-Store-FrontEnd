import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  register_flag:boolean=false;
  bgColor:string="#757373";
  username:string='';
  password:string='';

  constructor(private user:UserService, private route:Router) { }

  ngOnInit(): void {
  }
  show_register(){
    this.register_flag=true;
    this.bgColor="#afacac";
  }
  show_login(){
    this.register_flag=false;
    this.bgColor="#757373";
  }
  submit(){
    let data={
      'username': this.username,
      'password': this.password
    }
    console.log('Api Call')
    this.user.login(data).subscribe((res:any)=>{
      console.log(res);
      localStorage.setItem('token', res.token.access);
      this.route.navigateByUrl('/dashboard/book')
    })
  }

}
