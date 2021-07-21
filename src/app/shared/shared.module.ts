import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedComponents } from './components';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [...sharedComponents],
  imports: [
    CommonModule,
    TranslateModule.forChild({})
  ],
  exports: [...sharedComponents]
})
export class SharedModule { }
