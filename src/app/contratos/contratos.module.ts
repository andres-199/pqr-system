import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ContratosComponent } from './contratos.component'
import { MatCardModule } from '@angular/material/card'
import { DinamycCrudModule } from '../components/dinamyc-crud/dinamyc-crud.module'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [{ path: '', component: ContratosComponent }]

@NgModule({
  declarations: [ContratosComponent],
  imports: [
    CommonModule,
    MatCardModule,
    DinamycCrudModule,
    RouterModule.forChild(routes)
  ]
})
export class ContratosModule {}
