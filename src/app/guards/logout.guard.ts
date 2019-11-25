import { Injectable } from '@angular/core'
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router'
import { Observable } from 'rxjs'
import { LoginService } from '../login/login.service'

@Injectable({
  providedIn: 'root'
})
export class LogoutGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isLogedIn = this.loginService.isLogedIn

    if (isLogedIn) {
      this.router.navigate(['/'])
    }

    return !isLogedIn
  }
}
