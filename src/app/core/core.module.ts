import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared/shared.module';
import { BrowserModule, TransferState } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { SidebarModule } from 'ng-sidebar';

import { AppComponent } from '@app/app.component';
import { components } from '@app/core/components';
import { containers } from '@app/core/containers';

import { translateBrowserLoaderFactory } from '@app/shared/functions/loaders/translate-browser.loader';
import { MaterialModule } from '@app/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ...components,
    ...containers
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    SidebarModule.forRoot(),
    BrowserModule.withServerTransition({ appId: 'app' }),
    BrowserAnimationsModule,
    TransferHttpCacheModule,
    HttpClientModule,
    RouterModule,
    TranslateModule.forRoot({
      defaultLanguage: 'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: translateBrowserLoaderFactory,
        deps: [HttpClient, TransferState]
      },
      isolate: false
    })
  ],
  providers: [],
  exports: [TranslateModule]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}
