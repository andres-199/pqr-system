import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PrediosComponent } from './predios.component'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [{ path: '', component: PrediosComponent }]

@NgModule({
  declarations: [PrediosComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class PrediosModule {}
