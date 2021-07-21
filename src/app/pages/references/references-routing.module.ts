import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferencesContainerComponent } from '@app/pages/references/containers/references-container/references-container.component';

const routes: Routes = [
  { path: '', component: ReferencesContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferencesRoutingModule { }
