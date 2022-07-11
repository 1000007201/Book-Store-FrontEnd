import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  register_flag:boolean=false;
  bgColor:string="#757373";

  constructor() { }

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

}
