import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { HomeRoutingModule } from '@app/pages/home/home-routing.module';
import { homeContainers } from './containers';
import { homeComponents } from './components';
import { MaterialModule } from '@app/material.module';

@NgModule({
  declarations: [
    ...homeContainers,
    ...homeComponents
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    TranslateModule.forChild({})
  ]
})
export class HomeModule { }
