import { Component, OnInit } from '@angular/core'
import {
  FormField,
  Col
} from '../components/dinamyc-crud/dinamyc-crud.component'

@Component({
  selector: 'app-terceros',
  templateUrl: './terceros.component.html',
  styles: []
})
export class TercerosComponent implements OnInit {
  public columnsToDisplay = [
    'codigo',
    'nombres',
    'apellidos',
    'correo',
    'telefono',
    'opciones'
  ]

  public cols: Col[] = [
    { header: 'CÓDIGO', field: 'codigo' },
    { header: 'NOMBRES', field: 'nombres' },
    { header: 'APELLIDOS', field: 'apellidos' },
    { header: 'CORREO', field: 'correo' },
    { header: 'TELEFONO', field: 'telefono' }
  ]

  public formFields: FormField[] = [
    { name: 'nombres', label: 'Nombres' },
    { name: 'apellidos', label: 'Apellidos' },
    { name: 'correo', label: 'Correo' },
    { name: 'telefono', label: 'Telefono' }
  ]

  public origin = 'profesionales'

  constructor() {}

  ngOnInit() {}
}
