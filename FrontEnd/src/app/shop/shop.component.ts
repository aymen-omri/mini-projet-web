import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private service : LoginService ) { }

  ngOnInit(): void {
    this.progData();

  }

  cartTab : any[] = []




prog : any[] = []
  progFilter : any[] =[] 

  progData(){
    this.service.getAllPrograms().subscribe((res : any)=>{
      this.progLook = this.progFilter = this.prog = res.data ; 
    })
  }


tabCheck = [
{
  id: 1 , 
  value : 'easy' ,
  type : 'radio'  
}, 
{ 
id: 2 ,
value : 'medium' ,
type : 'radio'  
},
{
  id:3 ,
   value : 'hard' ,
  type : 'radio'  
}
]




onChange(event : any){
  if(event.target.checked){
   this.progLook =  this.progFilter = this.prog.filter((data: any) => data.level == event.target.value)
  }
  else {
   this.progLook = this.progFilter = this.prog 
  }

}
look ='' 

progLook : any[] =[]

lookingFor(){
  this.progLook = this.progFilter.filter(prog => prog.name.toLocaleLowerCase().includes(this.look.toLocaleLowerCase()))

}


cart : any[] = [] ; 

addToCart(item : any){
  this.cart.push(item) ; 
  var obj = JSON.stringify(this.cart);
  console.log(obj);
  localStorage.setItem('cart' , obj) ; 

}
 
  

}


