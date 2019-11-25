import { Component, OnInit } from '@angular/core'
import { LoginService } from './login/login.service'
import { Router, NavigationEnd } from '@angular/router'
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  public title = 'pqr system'
  public hide = false
  public iLoaded = false

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.iLoaded = true
        if (event.url === '/login') {
          this.hide = true
        } else {
          this.hide = false
        }
      })
  }

  public onExit() {
    this.loginService.logout()
  }
}
