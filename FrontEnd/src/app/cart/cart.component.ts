import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartservice : CartService , private  share : ShareService) { }

  public  programs : any = []
  public grandTotal : Number = 0

  ngOnInit(): void {
    this.cartservice.getPrograms().subscribe(res => {
      this.programs = res ; 
      console.log(this.programs)
      this.grandTotal = this.cartservice.getTotalPrice()
    })

     this.share.currentMessage.subscribe(res => console.log(res))
    

  }

  removeItem(item : any){
    this.cartservice.removeCart(item)

  }
  emptyCart(){
    this.cartservice.removeAll()
  }

}
