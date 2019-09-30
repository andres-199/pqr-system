import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ZonasComponent } from './zonas.component'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [{ path: '', component: ZonasComponent }]

@NgModule({
  declarations: [ZonasComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ZonasModule {}
