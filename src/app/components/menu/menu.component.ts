import { Component, OnInit } from '@angular/core'
import { LoginService } from 'src/app/login/login.service'

export interface MenuItem {
  label: string
  routerLink?: string[]
  icon?: string
  title?: string
  action?: CallableFunction
  items?: MenuItem[]
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  items: MenuItem[]
  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.setMenu()
  }

  private setMenu() {
    const user = this.loginService.user

    if (user.rol_id === 1) {
      this.items = [
        { label: 'Inicio', icon: 'home', routerLink: [''] },
        { label: 'PQR', icon: 'receipt', routerLink: ['pqr'] },
        {
          label: 'Estados PQR',
          icon: 'local_library',
          routerLink: ['pqr/status']
        },
        {
          label: 'Tipos PQR',
          icon: 'insert_drive_file',
          routerLink: ['pqr/types']
        },
        { label: 'Predios', icon: 'post_add', routerLink: ['predios'] },
        { label: 'Contratos', icon: 'list', routerLink: ['contratos'] },
        { label: 'Profesionales', icon: 'people', routerLink: ['terceros'] },
        { label: 'Campos', icon: 'streetview', routerLink: ['zonas'] }
      ]
    } else if (user.rol_id === 2) {
      this.items = [
        { label: 'Inicio', icon: 'home', routerLink: [''] },
        { label: 'PQR', icon: 'receipt', routerLink: ['pqr'] }
      ]
    }
  }
}
