import { Component, OnInit, Inject } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import md5 from 'md5'
import { CrudService } from 'src/app/components/dinamyc-crud/crud.service'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
  private isCreate = false
  public roles: any[]
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<UsuarioComponent>,
    private service: CrudService
  ) {}

  ngOnInit() {
    this.getRoles()
    if (!this.data.Usuario) {
      this.isCreate = true
      this.setUser()
    }
  }

  public onCancel() {
    this.dialogRef.close()
  }

  public onAccept() {
    console.log(this.data.Usuario)

  }

  private getRoles() {
    this.service.findAll('roles/list').subscribe(_roles => {
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
