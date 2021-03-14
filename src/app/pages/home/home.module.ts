import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from '@app/pages/home/home-routing.module';
import { HomeContainerComponent } from '@app/pages/home/containers/home/home-container.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
