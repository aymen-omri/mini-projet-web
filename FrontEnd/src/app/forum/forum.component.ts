import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../login.service';



@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor(
    private router :Router , 
    private service : LoginService 
    
    
    ) { }
    
    data : any

  ngOnInit(): void {
    this.getPub();
    this.verif();
    
}

user = localStorage.getItem('token');
objUser : any ; 

objPub = {
  'name' : '' ,
  'content' : '' , 
  'iduser' : ''

}

content : any ; 

postPub(){
  if(this.user){
    this.objUser = JSON.parse(this.user) ; 
    this.objPub ={
      'name' : this.objUser[0].name , 
      'content' : this.content ,
      'iduser' : this.objUser[0].id
    } 
    this.service.postForumPub(this.objPub).subscribe((res:any) => {
      console.log(res) ;
      this.getPub() ; 
    })
     
  } 
  else {
    alert("empty localstorage !!!");

  }
}


tabPub : any[] = [] ; 

getPub(){
  this.service.getForumPub().subscribe((res: any) => {
    this.tabPub = res.data ;
      
    })
 }

 notLoggedIn = true ; 
 loggedIn = false ; 
 
 verif(){
   if(this.user){
     this.notLoggedIn = false ; 
     this.loggedIn = true ; 

   }
 }







  
  




  }



  

 
   






 




