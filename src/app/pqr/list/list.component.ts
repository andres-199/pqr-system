import { Component, OnInit, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { PqrService } from '../pqr.service'
import { MatTableDataSource } from '@angular/material/table'
import {
  Col,
  MenuOption
} from 'src/app/components/dinamyc-crud/dinamyc-crud.component'
import { MatDialog } from '@angular/material/dialog'
import { FormComponent } from '../form/form.component'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {
  public dataSource: any
  public cols: Col[] = [
    { header: 'CÓDIGO', field: 'codigo' },
    { header: 'CAMPO', field: 'campo' },
    { header: 'TIPO', field: 'tipo_pqr' },
    { header: 'ESTADO', field: 'estado' },
    { header: 'FECHA SOLICITUD', field: 'fecha_solicitud' },
    { header: 'T.GESTIÓN', field: 'tiempo_gestion' },
    { header: 'FECHA CANCELACION', field: 'fecha_cancelacion' }
  ]
  public menuOptions: MenuOption[] = []
  public columnsToDisplay: string[] = [
    'codigo',
    'campo',
    'tipo_pqr',
    'estado',
    'fecha_solicitud',
    'tiempo_gestion',
    'fecha_cancelacion',
    'opciones'
  ]

  @ViewChild(MatPaginator, { static: true })
  private paginator: MatPaginator

  constructor(private pqrService: PqrService, private dialog: MatDialog) {}

  ngOnInit() {
    this.getData()
  }

  private getData() {
    this.pqrService.allPqrs.subscribe(allPqrs => {
      this.dataSource = new MatTableDataSource<any>()
      this.dataSource.paginator = this.paginator
    })
  }

  public onRegister() {
    const ref = this.dialog.open(FormComponent, {
      minWidth: 650
    })

    ref.afterClosed().subscribe(data => {
      console.log(data)
    })
  }
}
