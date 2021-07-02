import { Component } from '@angular/core';
import {User} from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User ={name:'ABC',id:'ABCD-ABCD-ABCD',userType:'none'};
  constructor(){
    if (localStorage.getItem('isLoggedIn') == null || this.user.userType == 'none'){
          localStorage.setItem('isLoggedIn','false');
    }
    else {
      localStorage.setItem('isLoggedIn', 'true');
    }
  }
}
