import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TercerosComponent } from './terceros.component'
import { Routes, RouterModule } from '@angular/router'
import { DinamycCrudModule } from '../components/dinamyc-crud/dinamyc-crud.module'
import { MatCardModule } from '@angular/material/card'

const routes: Routes = [{ path: '', component: TercerosComponent }]

@NgModule({
  declarations: [TercerosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DinamycCrudModule,
    MatCardModule
  ]
})
export class TercerosModule {}
