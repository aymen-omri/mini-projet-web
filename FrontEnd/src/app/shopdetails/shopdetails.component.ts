import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-shopdetails',
  templateUrl: './shopdetails.component.html',
  styleUrls: ['./shopdetails.component.css']
})
export class ShopdetailsComponent implements OnInit {
  public programs : any = <any>{}

  constructor(private route : ActivatedRoute , private service : LoginService) { }

  ngOnInit(): void {
    const id : number = Number(this.route.snapshot.paramMap.get('id'));
    
    this.service.sendData2().subscribe((prog: any) => {
      this.programs =  prog.data.find((program : any) => 
      program.id == id
      ) 
  })
  }

}
