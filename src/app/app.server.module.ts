import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { TransferState } from '@angular/platform-browser';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppModule } from '@app/app.module';
import { AppComponent } from '@app/app.component';
import { translateServerLoaderFactory } from '@app/shared/functions/loaders/translate-server.loader';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    TranslateModule.forRoot({
      defaultLanguage: 'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: translateServerLoaderFactory,
        deps: [TransferState]
      }
    })
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
