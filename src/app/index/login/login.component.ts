import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public postData = {
    email: '',
    password: ''
  }
  public errorText: string;

  constructor(public authService:AuthService, public router:Router) {
    this.errorText = '';
   }

  ngOnInit(): void {
  }

  loginAction(){
    if(this.postData.email && this.postData.password){
      this.errorText = '';
      if(this.authService.login(this.postData)){
        this.router.navigate(['']);
      }
    }else{
      this.errorText = 'Please Enter Valid Credentials';
    }
  }
}
