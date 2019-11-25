import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ListComponent } from './list.component'
import { Routes, RouterModule } from '@angular/router'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { FormModule } from '../form/form.module'
import { FormComponent } from '../form/form.component'
import { MatDialogModule } from '@angular/material/dialog'
import { MatTableExporterModule } from 'mat-table-exporter'

const routes: Routes = [{ path: '', component: ListComponent }]

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    FormModule,
    MatDialogModule,
    MatTableExporterModule
  ],
  entryComponents: [FormComponent]
})
export class ListModule {}
