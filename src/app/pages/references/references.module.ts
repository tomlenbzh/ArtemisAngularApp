import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { ReferencesRoutingModule } from './references-routing.module';
import { referencesComponents } from './components';
import { referencesContainers } from './containers';
import { MaterialModule } from '@app/material.module';

@NgModule({
  declarations: [
    ...referencesComponents,
    ...referencesContainers
  ],
  imports: [
    CommonModule,
    ReferencesRoutingModule,
    MaterialModule,
    TranslateModule.forChild({})
  ]
})
export class ReferencesModule { }
