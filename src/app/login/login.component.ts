import { Component, OnInit } from '@angular/core'
import md5 from 'md5'
import { LoginService } from './login.service'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {
  username: string
  password: string
  constructor(
    private loginService: LoginService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {}

  public onLogin() {
    if (!this.username || !this.password) {
      return false
    }

    const loginData = { username: this.username, password: md5(this.password) }
    this.loginService.login(loginData).subscribe(
      user => {
        if (user) {
          this.loginService.user = user
          this.router.navigate(['/'])
        } else {
          this.showMsg('Nombre de usuario o Contraseña herrados.')
        }
      },
      error => {
        this.showMsg(error.name || error.message)
      }
    )
  }

  private showMsg(message: string) {
    this._snackBar.open(message, 'Aceptar', {
      duration: 7000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom'
    })
  }
}
