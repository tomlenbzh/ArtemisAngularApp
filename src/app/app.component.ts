import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'artemis-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'artemis';

  constructor(private translateService: TranslateService) {
    const defaultLang = this.translateService.getDefaultLang();
    this.translateService.use(defaultLang);
  }
}
