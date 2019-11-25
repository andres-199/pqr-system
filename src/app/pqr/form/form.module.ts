import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormComponent } from './form.component'
import { MatDialogModule } from '@angular/material/dialog'
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { CrudService } from 'src/app/components/dinamyc-crud/crud.service'

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [FormComponent],
  providers: [CrudService]
})
export class FormModule {}
