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
    private cookie:CookieService , 
    private router :Router , 
    private service : LoginService 
    
    
    ) { }
    
    data : any

  ngOnInit(): void {
    this.verifLogedIn()
    this.getPubs()
    
}


publication : any[] = []
getPubs(){
  this.service.getPub().subscribe((data : any) => {
    this.publication = data

  })
}

mypub : any  = {
  name:'' , 
  content:''
}

postPubs(){
  this.service.postPub(this.mypub).subscribe((data : any) => {
    console.log(data)
    this.publication = [data, ...this.publication]
    this.resetPub()


  })
}
resetPub(){
 this.mypub = {
    name: '' , 
    content : ''
  }
}











   verif:boolean = false ;

  verifLogedIn(){
    const cookie = this.cookie.get("value")
    if(cookie == "ok"){
      this.verif = true
    } else {
      alert("you have too login")
    }
    
  }

  getRoute(){
    if (!this.verif){
      this.router.navigate(['/login'])

    } else {
      return
    }
  }

  
    //getForumPub(){
   // this.service.getPub().subscribe((rep : any) => {
     // console.log(rep)
      //this.publication = rep.data
    //})
  //}

userForm = new FormGroup({
    'name' : new FormControl('' , Validators.required) , 
    'content' : new FormControl('' , Validators.required)
  })
//pubSubmit(){
    //if(this.userForm.valid){
      //this.service.sendPub(this.userForm.value).subscribe((res) => {
        //console.log(res)
        //this.publication = [res, ...this.publication]

      //})
      //this.userForm.reset()

    //}
    //else{
      //alert("something went wrong")

    //}
  //}

  
  




  }



  

 
   






 




