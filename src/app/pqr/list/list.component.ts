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
import { LoginService } from 'src/app/login/login.service'
import { Export_Config } from '../../components/dinamyc-crud/dinamyc-crud.component'

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
    { header: 'TIPO', field: 'tipo' },
    { header: 'ESTADO', field: 'estado' },
    { header: 'FECHA SOLICITUD', field: 'fecha_solicitud' },
    { header: 'T.GESTIÓN', field: 'tiempo_gestion' },
    { header: 'FECHA CANCELACION', field: 'fecha_cancelacion' }
  ]
  public menuOptions: MenuOption[] = [
    { label: 'Seguimiento', icon: 'playlist_add', handler: () => {} },
    { label: 'Plan/alcance', icon: 'assignment', handler: () => {} },
    { label: 'Ejecución', icon: 'assignment_turned_in', handler: () => {} },
    { label: 'Contrato', icon: 'list', handler: () => {} }
  ]
  public columnsToDisplay: string[] = [
    'codigo',
    'campo',
    'tipo',
    'estado',
    'fecha_solicitud',
    'tiempo_gestion',
    'fecha_cancelacion',
    'opciones'
  ]
  public user

  @ViewChild(MatPaginator, { static: true })
  private paginator: MatPaginator
  public exportConfig = Export_Config
  constructor(
    private pqrService: PqrService,
    private dialog: MatDialog,
    private loginService: LoginService
  ) {
    this.exportConfig.fileName = 'PQR_Export'
  }

  ngOnInit() {
    this.user = this.loginService.user
    this.getData()
  }

  private getData() {
    this.pqrService.allPqrs.subscribe(allPqrs => {
      this.dataSource = new MatTableDataSource<any>(allPqrs)
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
