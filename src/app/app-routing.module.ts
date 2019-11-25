import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginGuard } from './guards/login.guard'
import { LogoutGuard } from './guards/logout.guard'

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(res => res.DashboardModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'pqr',
    loadChildren: () => import('./pqr/pqr.module').then(res => res.PqrModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'predios',
    loadChildren: () =>
      import('./predios/predios.module').then(res => res.PrediosModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'terceros',
    loadChildren: () =>
      import('./terceros/terceros.module').then(res => res.TercerosModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'zonas',
    loadChildren: () =>
      import('./zonas/zonas.module').then(res => res.ZonasModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then(res => res.LoginModule),
    canActivate: [LogoutGuard]
  },
  {
    path: 'contratos',
    loadChildren: () =>
      import('./contratos/contratos.module').then(res => res.ContratosModule),
    canActivate: [LoginGuard]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
