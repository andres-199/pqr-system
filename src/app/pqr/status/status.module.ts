import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StatusComponent } from './status.component'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [{ path: '', component: StatusComponent }]

@NgModule({
  declarations: [StatusComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class StatusModule {}
