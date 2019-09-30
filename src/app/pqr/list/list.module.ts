import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ListComponent } from './list.component'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [{ path: '', component: ListComponent }]

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ListModule {}
