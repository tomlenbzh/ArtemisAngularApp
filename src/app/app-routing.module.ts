import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutContainerComponent } from '@app/core/containers/layout/layout.container.component';

const mainChildren = [];

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
