import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private serv : LoginService , private router : Router) { }

  ngOnInit(): void {
    console.log(this.userForme)
  }

  userForme = new FormGroup({
    'name' : new FormControl('' , Validators.required), 
    'email' : new FormControl('' , Validators.required),
    'password' : new FormControl('' , Validators.required)

  })
  err :any ; 
  show = false ; 

  userRegister(){
    if(this.userForme.valid){
        this.serv.Registration(this.userForme.value).pipe(first()).subscribe((data:any) => {
            console.log(data) ;
            if(data.message=='success'){
            this.router.navigate(['/login']);
            }else {
              this.err = data.message;
              this.show=true ; 

            }
        })
     } 
     else {
         alert("something went wrong")
     }
  }

}
