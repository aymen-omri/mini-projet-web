import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css']
})
export class PayementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  affiche(){
    alert('you wil receive your product in 48h');
  }

}
