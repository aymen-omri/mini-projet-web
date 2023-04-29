import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private service : LoginService) { }

  public  programs : any = []
  public grandTotal : Number = 0

  ngOnInit(): void {
    console.log(this.objUser); 
    this.verif();
    this.getCartElements() ; 
    this.totalPrice()
 }

  loggedIn = false ; 
  notLoggedin = false ; 
  objUser : any ;
  user = localStorage.getItem('token');

  verif(){
    if (this.user){
      this.loggedIn = true ; 
    }
    else {
      this.notLoggedin = true ; 
    }
  }

 cart : any [] = []; 
 sobj = localStorage.getItem('cart') ; 

 

 getCartElements(){
   if(this.sobj){
     var obj = JSON.parse(this.sobj);
     this.cart = obj ;  
     this.grandTotal = this.cart.length;
   }
 }

 clearCart(){
  localStorage.removeItem('cart') ; 
  window.location.replace('/cart');
 }

 pt =0 ;

 totalPrice(){
   this.cart.forEach((element:any)=>{
     this.pt = this.pt+Number(element.prix) ;
   })
 }




 

  
  
    

  




}
