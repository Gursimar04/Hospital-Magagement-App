import { Component, OnInit } from '@angular/core';
import { UserAuthenticateService } from '../user-authenticate.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private UAService: UserAuthenticateService) {
    this.isLoggedIn = localStorage.getItem('id') !=null?true:false;
   }

  ngOnInit(): void {
    this.UAService.setAuth.subscribe((msg: any) => {
      this.isLoggedIn = msg;
    })
  }

}
