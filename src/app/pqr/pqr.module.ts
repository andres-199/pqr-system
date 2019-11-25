import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { PqrService } from './pqr.service'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./list/list.module').then(res => res.ListModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(res => res.ListModule)
  },
  {
    path: 'status',
    loadChildren: () =>
      import('./status/status.module').then(res => res.StatusModule)
  },
  {
    path: 'types',
    loadChildren: () =>
      import('./types/types.module').then(res => res.TypesModule)
  }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [PqrService]
})
export class PqrModule {}
