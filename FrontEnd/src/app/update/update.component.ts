import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private service : LoginService) { }

  ngOnInit(): void {
    this.affiche();
  }
  affiche(){
    if(this.user){
      this.newName = JSON.parse(this.user)[0].name;
      this.newEmail = JSON.parse(this.user)[0].email;
      this.newPass = JSON.parse(this.user)[0].password;
    }
  }
  newEmail : any ;
  newName : any ;
  newPass : any ; 
  user = localStorage.getItem('token') ; 
  obj : any ; 
  objToSend = {
    'id':'',
    'name':'',
    'email':'',
    'password':''
  }
  msg : any ; 
  show = false ; 

updatePersonalData(){
  if(this.user){
    this.obj = JSON.parse(this.user);
    this.objToSend = {
      'id':this.obj[0].id,
      'name':this.newName,
      'email':this.newEmail,
      'password':this.newPass

    }
    this.service.update(this.objToSend).subscribe((res:any)=>{
      console.log(res);
      this.msg = res.message ; 
      this.show = true ;
      this.newEmail = '' ; 
      this.newName = '' ;
      this.newPass = '' ;
      
    })

  }
}

}
