import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private serv : LoginService) { }

  ngOnInit(): void {
    this.userData()
   

  }

  userData(){
    this.serv.sendData2().subscribe(res => console.log(res))
  }

  


}
