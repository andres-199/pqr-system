import { Component, OnInit } from '@angular/core'
import {
  FormField,
  Col
} from '../components/dinamyc-crud/dinamyc-crud.component'

@Component({
  selector: 'app-predios',
  templateUrl: './predios.component.html',
  styles: []
})
export class PrediosComponent implements OnInit {
  public columnsToDisplay = ['codigo', 'nombre', 'requirente', 'opciones']

  public cols: Col[] = [
    { header: 'CÓDIGO SIG', field: 'codigo' },
    { header: 'NOMBRE', field: 'nombre' },
    { header: 'REQUIRENTE', field: 'requirente' }
  ]

  public formFields: FormField[] = [
    { name: 'codigo', label: 'Código SIG' },
    { name: 'nombre', label: 'Nombre' },
    { name: 'requirente', label: 'Requirente' }
  ]

  public origin = 'predios'

  constructor() {}

  ngOnInit() {}
}
