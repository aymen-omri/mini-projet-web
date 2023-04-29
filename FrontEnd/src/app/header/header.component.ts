import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public allPrograms : Number = 0

  constructor(private cartservice : CartService) { }

  ngOnInit(): void {
    this.cartservice.getPrograms().subscribe(res =>{
      this.allPrograms = res.length ; 
    })

    this.isLoggedIn();
  }

  nothere = true ; 
  user = localStorage.getItem('token') ; 
  yourName : any ;
  
  isLoggedIn(){
    if(this.user){
      this.yourName = JSON.parse(this.user)[0].name ; 
      this.nothere = false ; 

    }
  }

  logout(){
    localStorage.removeItem('token') ; 
    window.location.replace('/') ; 
  }



}
