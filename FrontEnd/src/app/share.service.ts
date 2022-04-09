import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  message = new ReplaySubject<any>()
  currentMessage = this.message.asObservable()

  constructor() { }

  update(data : any[]){
    this.message.next(data)
  }
}
