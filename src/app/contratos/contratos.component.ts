import { Component, OnInit } from '@angular/core'
import {
  Col,
  FormField
} from '../components/dinamyc-crud/dinamyc-crud.component'

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styles: []
})
export class ContratosComponent implements OnInit {
  public columnsToDisplay = [
    'codigo',
    'fecha',
    'valor',
    'fecha_entrega',
    'opciones'
  ]

  public cols: Col[] = [
    { header: 'CÓDIGO', field: 'codigo' },
    { header: 'FECHA', field: 'fecha' },
    { header: 'VALOR', field: 'valor' },
    {
      header: 'FECHA ENTREGA CONTRATO A PAGO / VISITA POSTERIOR',
      field: 'fecha_entrega'
    }
  ]

  public formFields: FormField[] = [
    { name: 'fecha', label: 'Fecha Contrato', type: 'date' },
    { name: 'valor', label: 'Valor Contrato', type: 'number' },
    {
      name: 'fecha_entrega',
      label: 'FECHA ENTREGA CONTRATO A PAGO / VISITA POSTERIOR',
      type: 'date'
    }
  ]

  public origin = 'contratos'

  constructor() {}

  ngOnInit() {}
}
