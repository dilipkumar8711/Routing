import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public userInfo: object;
  public obj ={
    name:'Dilip',
    id:1
  }
  public showProduct:boolean = false;
  constructor(public authSercive:AuthService
  ) { }

  ngOnInit(): void {
    this.authSercive.getUserDetails().then(data => {
      this.userInfo = data;
    })
  }
  showProducts(){
    this.showProduct = !this.showProduct;
  }
  count = 0;
  send(){
    this.count ++;
    this.obj.name = 'Ramya' + this.count;
    console.log('send',this.obj);
  }
}
