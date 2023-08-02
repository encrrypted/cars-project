import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  
  constructor(
    private usersService: UsersService,
    private router: Router
    ) {}
  
  
  canActivate(): boolean {

    if(!this.usersService.isAuthenticated) {
      this.router.navigate(['/login'])
    }

    return this.usersService.isAuthenticated
  }

  canActivateChild() {
    return this.canActivate()
  }



  
}
