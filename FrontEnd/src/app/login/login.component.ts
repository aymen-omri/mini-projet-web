import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, FormsModule , ReactiveFormsModule, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service : LoginService , private cookie:CookieService ) { }

  ngOnInit(): void {
   
    
    
  }

  userForm = new FormGroup({
    'email' : new FormControl('' , Validators.required) ,
    'password' : new FormControl('' , Validators.required)
})

userData : any
userSubmit() {
  if (this.userForm.valid){
    this.service.sendData(this.userForm.value).subscribe((res : any)  => {
      console.log(res)
      this.userData = res.data
      console.log(res.data[0].email)
      this.cookie.set("value" , "ok")
     })
    
  } else {
    console.log('x((((')
  }
}




}
