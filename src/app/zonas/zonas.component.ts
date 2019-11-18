import { Component, OnInit } from '@angular/core'
import {
  Col,
  FormField
} from '../components/dinamyc-crud/dinamyc-crud.component'

export interface Campo {
  id?: number
  codigo?: string
  nombre?: string
  descripcion?: string
}

@Component({
  selector: 'app-zonas',
  templateUrl: './zonas.component.html',
  styles: []
})
export class ZonasComponent implements OnInit {
  public columnsToDisplay = ['codigo', 'nombre', 'descripcion', 'opciones']

  public cols: Col[] = [
    { header: 'CÓDIGO', field: 'codigo' },
    { header: 'NOMBRE', field: 'nombre' },
    { header: 'DESCRIPCIÓN', field: 'descripcion' }
  ]

  public formFields: FormField[] = [
    { name: 'nombre', label: 'Nombre' },
    { name: 'descripcion', label: 'Descripción', type: 'textArea' }
  ]

  public origin = 'campos'
  constructor() {}

  ngOnInit() {}
}
