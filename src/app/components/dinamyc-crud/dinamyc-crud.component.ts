import { Component, OnInit, Input, ViewChild } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { DinamycFormComponent } from '../dinamyc-form/dinamyc-form.component'
import { CrudService } from './crud.service'
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'

export interface Col {
  header: string
  field: string
}

export interface FormField {
  name: string
  label: string
  type?: 'text' | 'textArea'
}

export interface MenuOption {
  icon: string
  label: string
  handler: (data: any) => any
}

@Component({
  selector: 'app-dinamyc-crud',
  templateUrl: './dinamyc-crud.component.html',
  styles: []
})
export class DinamycCrudComponent implements OnInit {
  @Input()
  public cols: Col[] = []
  @Input()
  public columnsToDisplay: string[] = []
  @Input()
  public formFields: FormField[] = []
  @Input()
  public origin = ''
  @Input()
  public menuOptions: MenuOption[]

  public dataSource: any

  @ViewChild(MatPaginator, { static: true })
  private paginator: MatPaginator

  constructor(
    private dialog: MatDialog,
    private service: CrudService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getDataSource()
  }

  private getDataSource() {
    this.service.findAll(this.origin).subscribe(dataSource => {
      this.dataSource = new MatTableDataSource<any>(dataSource)
      this.dataSource.paginator = this.paginator
    })
  }

  public onEdit(data) {
    const ref = this.dialog.open(DinamycFormComponent, {
      data: { data, formFields: this.formFields },
      minWidth: 500
    })

    ref.afterClosed().subscribe(_data => {
      if (_data) {
        this.update(_data)
      }
    })
  }

  public onDelete(data) {
    const ref = this.dialog.open(DinamycFormComponent, {
      data: { isDelete: true },
      minWidth: 400
    })

    ref.afterClosed().subscribe(res => {
      if (res) {
        this.delete(data.id)
      }
    })
  }

  public onRegister() {
    const ref = this.dialog.open(DinamycFormComponent, {
      data: { formFields: this.formFields },
      minWidth: 500
    })

    ref.afterClosed().subscribe(data => {
      if (data) {
        this.create(data)
      }
    })
  }

  private update(data) {
    this.service.update(this.origin, data).subscribe(
      res => {
        this.onSuccess(false)
      },
      err => {
        this.showMsg(err.name || err.message)
      }
    )
  }

  private create(data) {
    this.service.create(this.origin, data).subscribe(
      res => {
        this.getDataSource()
        this.onSuccess()
      },
      err => {
        this.showMsg(err.name || err.message)
      }
    )
  }

  private delete(id: number) {
    const _origin = `${this.origin}/${id}`
    this.service.delete(_origin).subscribe(
      res => {
        this.getDataSource()
        this.onSuccess()
      },
      err => {
        this.showMsg(err.name || err.message)
      }
    )
  }

  private onSuccess(is_create = true) {
    const message = `Registro ${
      is_create ? 'creado' : 'actualizado'
    } exitosamente!`
    this.showMsg(message)
  }

  private showMsg(message: string) {
    this._snackBar.open(message, 'Aceptar', {
      duration: 7000
    })
  }
}
