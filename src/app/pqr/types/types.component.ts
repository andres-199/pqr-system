import { Component, OnInit } from '@angular/core';
import { Col, FormField } from 'src/app/components/dinamyc-crud/dinamyc-crud.component';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styles: []
})
export class TypesComponent implements OnInit {
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

  public origin = 'tipos_pqr'

  constructor() {}

  ngOnInit() {}
}
