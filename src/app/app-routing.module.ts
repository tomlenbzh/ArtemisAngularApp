import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutContainerComponent } from '@app/core/containers/layout/layout.container.component';

const mainChildren = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    data: { title: 'ACCUEIL' }
  }, {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

const routes: Routes = [
  { path: '', component: LayoutContainerComponent, children: mainChildren },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
