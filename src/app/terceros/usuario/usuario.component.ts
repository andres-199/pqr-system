import { Component, OnInit, Inject } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import md5 from 'md5'
import { CrudService } from 'src/app/components/dinamyc-crud/crud.service'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Subject } from 'rxjs'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
  public roles: any[]
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<UsuarioComponent>,
    private service: CrudService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getRoles()
    if (!this.data.Usuario) {
      this.setUser()
    }
  }

  public onCancel() {
    this.dialogRef.close()
  }

  public onAccept() {
    this.handleAction().subscribe(_usuario => {
      this.handleResponse(_usuario)
    })
  }

  /**
   * maneja las acciones de guardar o actualizar
   */
  private handleAction() {
    const handleSubject = new Subject<any>()
    const action = this.data.Usuario.id ? 'update' : 'create'
    const origin = 'usuarios'

    this.service[action](origin, this.data.Usuario).subscribe(
      _usuario => {
        handleSubject.next(_usuario)
      },
      error => {
        this.showMsg(error.name || error.message)
        this.dialogRef.close()
      }
    )

    return handleSubject.asObservable()
  }

  /**
   * manejador de respuesta
   */
  private handleResponse(response) {
    const isArray = Array.isArray(response)

    if (!isArray) {
      this.data.Usuario = response
    }

    this.showMsg('La gestión de usuario se realizó con exito!')
    this.dialogRef.close()
  }

  private showMsg(message: string) {
    this._snackBar.open(message, 'Aceptar', {
      duration: 7000
    })
  }

  private getRoles() {
    const origin = 'roles/list'
    this.service.findAll(origin).subscribe(_roles => {
      this.roles = _roles
    })
  }

  private setUser() {
    this.data.Usuario = {
      profesional_id: this.data.id,
      username: this.data.correo,
      password: md5(this.data.correo),
      enabled: true
    }
  }
}
