import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactContainerComponent } from '@app/pages/contact/containers/contact-container/contact-container.component';

const routes: Routes = [
  { path: '', component: ContactContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
