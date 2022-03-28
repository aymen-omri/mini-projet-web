import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartList : any =[]
  public progList = new BehaviorSubject<any>([])


  constructor() { }
getPrograms(){
  return this.progList.asObservable()
}

setPrograms(prog : any){
  this.cartList.push(...prog)
  this.progList.next(prog)
}

addToCart(prog : any){
  this.cartList.push(prog)
  this.progList.next(this.cartList)
  this.getTotalPrice()
  console.log(this.cartList)
}

getTotalPrice() : number{
  let grandTotal = 0 
  this.cartList.map((a : any)=>{
    grandTotal += a.total
  } )
  return grandTotal
}

removeCart(prog : any){
  this.cartList.map((a:any , index : any)=> {
    if( prog.id === a.id){
      this.cartList.splice(index ,1)

    }
  })
  
}

removeAll(){
  this.cartList = []
  this.progList.next(this.cartList)
}

}
