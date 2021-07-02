import { Component, OnInit} from '@angular/core';
import { UserAuthenticateService } from '../user-authenticate.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = "";
  password:string = "";
  userAuth: UserAuthenticateService = new UserAuthenticateService();
  
  constructor() { }

  ngOnInit(): void {
  }

  print(){
    this.userAuth.login(this.email,this.password)
  }
}
