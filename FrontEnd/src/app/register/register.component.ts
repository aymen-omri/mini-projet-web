import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private serv : LoginService) { }

  ngOnInit(): void {
    console.log(this.userForme)
  }

  userForme = new FormGroup({
    'nom' : new FormControl('' , Validators.required), 
    'email' : new FormControl('' , Validators.required),
    'password' : new FormControl('' , Validators.required)

  })

  userRegister(){
    if(this.userForme.valid){
      this.serv.registerData(this.userForme.value).subscribe(res => console.log(res))


    }else{
      console.log('why god why')
    }
  }

}
