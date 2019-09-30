import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TercerosComponent } from './terceros.component'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [{ path: '', component: TercerosComponent }]

@NgModule({
  declarations: [TercerosComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class TercerosModule {}
