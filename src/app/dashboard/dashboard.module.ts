import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardComponent } from './dashboard.component'
import { Routes } from '@angular/router'

const routes: Routes = [{ path: '', component: DashboardComponent }]

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule]
})
export class DashboardModule {}
