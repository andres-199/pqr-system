import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DinamycCrudComponent } from './dinamyc-crud.component'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { DinamycFormComponent } from '../dinamyc-form/dinamyc-form.component'
import { DinamycFormModule } from '../dinamyc-form/dinamyc-form.module'
import { CrudService } from './crud.service'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
  declarations: [DinamycCrudComponent],
  imports: [
    DinamycFormModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  exports: [DinamycCrudComponent],
  entryComponents: [DinamycFormComponent],
  providers: [CrudService]
})
export class DinamycCrudModule {}
