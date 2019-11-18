import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TypesComponent } from './types.component'
import { Routes, RouterModule } from '@angular/router'
import { DinamycCrudModule } from 'src/app/components/dinamyc-crud/dinamyc-crud.module'
import { MatCardModule } from '@angular/material/card'

const routes: Routes = [{ path: '', component: TypesComponent }]

@NgModule({
  declarations: [TypesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    DinamycCrudModule
  ]
})
export class TypesModule {}
