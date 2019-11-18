import { Component, OnInit, Inject } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { FormField } from '../dinamyc-crud/dinamyc-crud.component'

@Component({
  selector: 'app-dinamyc-form',
  templateUrl: './dinamyc-form.component.html',
  styles: []
})
export class DinamycFormComponent implements OnInit {
  public data: any
  public formFields: FormField[]
  public title = ''
  public isDelete = false
  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private dialogRef: MatDialogRef<DinamycFormComponent>
  ) {}

  ngOnInit() {
    this.data = this._data.data || {}
    this.formFields = this._data.formFields || []
    this.isDelete = this._data.isDelete || false
    this.title = this.data.id
      ? 'Editar'
      : this.isDelete
      ? 'Eliminar'
      : 'Registrar'
  }

  public onCancel() {
    this.dialogRef.close()
  }
}
