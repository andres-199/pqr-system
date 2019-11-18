import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ZonasComponent } from './zonas.component'
import { Routes, RouterModule } from '@angular/router'
import { MatCardModule } from '@angular/material/card'
import { DinamycCrudModule } from '../components/dinamyc-crud/dinamyc-crud.module'

const routes: Routes = [{ path: '', component: ZonasComponent }]

@NgModule({
  declarations: [ZonasComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    DinamycCrudModule
  ]
})
export class ZonasModule {}
