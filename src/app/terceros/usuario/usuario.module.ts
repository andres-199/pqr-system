import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UsuarioComponent } from './usuario.component'
import { MatButtonModule } from '@angular/material/button'
import { FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatChipsModule } from '@angular/material/chips'
import { MatDialogModule } from '@angular/material/dialog'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatSelectModule } from '@angular/material/select'

@NgModule({
  declarations: [UsuarioComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatChipsModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  exports: [UsuarioComponent]
})
export class UsuarioModule {}
