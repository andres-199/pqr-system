import { Component, OnInit } from '@angular/core'
import { CrudService } from 'src/app/components/dinamyc-crud/crud.service'
import { Observable } from 'rxjs'
import { FormField } from 'src/app/components/dinamyc-crud/dinamyc-crud.component'
import { MatDialogRef } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit {
  public campos: Observable<any[]>
  public tipos: Observable<any[]>
  public predios: Observable<any[]>
  public profesionales: Observable<any[]>
  private _profesionales: any[]

  public pqr: any = {}
  public formFields: FormField[] = [
    {
      name: 'campo_id',
      label: 'Campo',
      options: 'campos',
      type: 'dropdown'
    },
    {
      name: 'tipo_pqr_id',
      label: 'Tipo de PQR',
      options: 'tipos',
      type: 'dropdown'
    },
    { name: 'fecha_solicitud', label: 'Fecha de Solicitud', type: 'date' },
    {
      name: 'predio_id',
      label: 'Predio',
      options: 'predios',
      type: 'dropdown'
    },
    {
      name: 'target_id',
      label: 'Destinatario',
      options: 'profesionales',
      type: 'dropdown'
    },
    { name: 'detalle', label: 'Detalle', type: 'textArea' }
  ]

  constructor(
    private crudService: CrudService,
    private dialogRef: MatDialogRef<FormComponent>,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getLists()
  }

  private getLists() {
    const origin = 'campos/list'
    this.campos = this.crudService.findAll(origin)

    const origin1 = 'tipos_pqr/list'
    this.tipos = this.crudService.findAll(origin1)

    const origin2 = 'predios/list'
    this.predios = this.crudService.findAll(origin2)

    const origin3 = 'profesionales'
    this.profesionales = this.crudService.findAll(origin3).pipe(
      map(profesionales => {
        this._profesionales = profesionales
        return profesionales.map(p => {
          return {
            label: `${p.nombres} ${p.apellidos} - ${p.cargo}`,
            value: p.id
          }
        })
      })
    )
  }

  public onAccept() {
    const origin = 'pqrs'
    this.pqr.target = this._profesionales.find(p => p.id === this.pqr.target_id)

    this.crudService.create(origin, this.pqr).subscribe(res => {
      this.showMsg('PQR creado con exito!')
      this.dialogRef.close()
    })
  }

  public onCancel() {
    this.dialogRef.close()
  }

  private showMsg(message: string) {
    this._snackBar.open(message, 'Aceptar', {
      duration: 7000
    })
  }
}
