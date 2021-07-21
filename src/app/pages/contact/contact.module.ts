import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { contactComponents } from './components';
import { contactContainers } from './containers';
import { ContactRoutingModule } from './contact-routing.module'
import { MaterialModule } from '@app/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    ...contactComponents,
    ...contactContainers
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule.forChild({})
  ]
})
export class ContactModule { }
