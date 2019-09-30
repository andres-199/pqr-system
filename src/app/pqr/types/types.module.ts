import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TypesComponent } from './types.component'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [{ path: '', component: TypesComponent }]

@NgModule({
  declarations: [TypesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class TypesModule {}
