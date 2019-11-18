import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StatusComponent } from './status.component'
import { Routes, RouterModule } from '@angular/router'
import { DinamycCrudModule } from 'src/app/components/dinamyc-crud/dinamyc-crud.module'
import { MatCardModule } from '@angular/material/card'

const routes: Routes = [{ path: '', component: StatusComponent }]

@NgModule({
  declarations: [StatusComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DinamycCrudModule,
    MatCardModule
  ]
})
export class StatusModule {}
