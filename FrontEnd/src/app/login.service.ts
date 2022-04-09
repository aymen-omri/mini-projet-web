import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

apiuRl = 'http://localhost:5000/login'
apiuRl3 = 'http://localhost:5000/register'
prog = 'http://localhost:5000/prog'

//forumpub = 'http://localhost:5000/pub'

pubs = 'http://localhost:4000/pubs' 

getPub(){
  return this.http.get(`${this.pubs}`)
}

postPub(data : any){
  return this.http.post(`${this.pubs}` , data)
}

postRepById(id : any , data : any){
  return this.http.post(`${this.pubs}/${id}` , data)
}


sendData(data : any){
  return this.http.post(`${this.apiuRl}`, data)
}

sendData2(){
  return this.http.get(`${this.prog}`)
}
registerData(data : any):Observable<any>{
  return this.http.post(`${this.apiuRl3}`, data)
}

//getPub(){
  //return this.http.get(`${this.forumpub}`)

//}
//sendPub(data : any){
  //return this.http.post(`${this.forumpub}`, data)
//}






}
