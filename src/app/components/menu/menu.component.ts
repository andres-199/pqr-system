import { Component, OnInit } from '@angular/core'

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
  constructor() {}

  ngOnInit() {
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
      { label: 'Profesionales', icon: 'people', routerLink: ['terceros'] },
      { label: 'Campos', icon: 'streetview', routerLink: ['zonas'] }
    ]
  }
}
