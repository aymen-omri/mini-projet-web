import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }


  baseUrl = 'http://localhost:7882/backendphp/' ; 
  
  
  pubs = 'http://localhost:4000/pubs' 

  Registration(data : any){
    return this.http.post(this.baseUrl+'register.php' , data).pipe(
      map((users: any) => {
        return users ; 
      })
    )
  }

  Login(data : any){
    return this.http.post(this.baseUrl+'loginme.php' , data).pipe(
      map((users : any) =>{
        var elem = JSON.stringify(users.data)
        this.setToken(elem) ;
        //console.log(users) 
        return users
      })
    )

  }

  setToken(data : any){
    localStorage.setItem('token' , data ) ; 
  }

 

  getAllPrograms(){
    return this.http.get(this.baseUrl+'allprog.php');
  }

  postForumPub(data : any){
    return this.http.post(this.baseUrl+'/postforum.php' , data)
  }

  getForumPub(){
    return this.http.get(this.baseUrl+'/getforumpub.php') ; 
  }

  update(data : any){
    return this.http.put(this.baseUrl+'update.php' , data)
  }



  
  
  
  
  
  addCart(data : any){
    return this.http.post(this.baseUrl+'addtocart.php' , data) ;
  }

  getCartElements(){
    return this.http.get(this.baseUrl+'cartelements.php');
  }







  getPub(){
  return this.http.get(`${this.pubs}`)
}

postPub(data : any){
  return this.http.post(`${this.pubs}` , data)
}




sendData(data : any){
}

sendData2(){
  
}
registerData(data : any){
}








}
