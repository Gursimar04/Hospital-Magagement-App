import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticateService {
  private isLoggedIn:BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);
  setAuth = this.isLoggedIn.asObservable();
  constructor() {
   }

  login(user:string, password:string):boolean{
    console.log(this.isLoggedIn.value)
    if (user == "xyz@gmail.com" && password == '12345'){
      this.isLoggedIn.next(true)
      console.log(this.isLoggedIn.value)
      localStorage.setItem('id', 'abc-abc-abc');
      localStorage.setItem('type', 'doctor');
      return true;
    }
    return false;
  }
}
