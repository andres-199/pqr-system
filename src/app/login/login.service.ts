import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlBase = environment.BACKEND_URL

  public get isLogedIn(): any {
    return localStorage.getItem('user') ? true : false
  }

  public get user(): any {
    return localStorage.getItem('user')
  }

  public set user(value: any) {
    localStorage.setItem('user', value)
  }

  constructor(private router: Router, private http: HttpClient) {}

  public login(loginData) {
    const url = this.urlBase + 'usuarios/login'
    return this.http.post(url, loginData)
  }

  public logout() {
    localStorage.removeItem('user')
    this.router.navigate(['/login'])
  }
}
