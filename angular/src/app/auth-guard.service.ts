import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { UserAuthenticateService } from './user-authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  isLoggedIn:boolean=false;
  constructor(private router: Router, private UAService: UserAuthenticateService) {
   }

   ngOnInit() {
     this.UAService.setAuth.subscribe((msg: any) => {
       this.isLoggedIn = msg.value;
     })
   }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(this.isLoggedIn)
    if (this.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
