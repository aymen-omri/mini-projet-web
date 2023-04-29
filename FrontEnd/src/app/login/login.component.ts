import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, FormsModule , ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service : LoginService , private router:Router  ) { }

  ngOnInit(): void {

}


  userForm = new FormGroup({
    'email' : new FormControl('' , Validators.required) ,
    'password' : new FormControl('' , Validators.required)
})

message : any ; 
show =false ; 
postData(){
  if(this.userForm.valid){
  this.service.Login(this.userForm.value).pipe(first()).subscribe((data : any) => {
    console.log(data);
    if(data.message =='success'){
      this.router.navigate(['/']);
      window.location.replace('/')

    

      }else if (data.message ='failed'){
        this.message = data.message ; 
        this.show = true ; 
      
    
    }
  })
} 
else {
  alert("something went wrong") ; 
}
}


}
