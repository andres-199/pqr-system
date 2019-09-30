import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(res => res.DashboardModule)
  },
  {
    path: 'pqr',
    loadChildren: () => import('./pqr/pqr.module').then(res => res.PqrModule)
  },
  {
    path: 'predios',
    loadChildren: () =>
      import('./predios/predios.module').then(res => res.PrediosModule)
  },
  {
    path: 'terceros',
    loadChildren: () =>
      import('./terceros/terceros.module').then(res => res.TercerosModule)
  },
  {
    path: 'zonas',
    loadChildren: () =>
      import('./zonas/zonas.module').then(res => res.ZonasModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
