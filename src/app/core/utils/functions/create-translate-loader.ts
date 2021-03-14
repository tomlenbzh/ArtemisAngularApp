import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function createTranslateLoader(path: string): any {
  path = path[path.length - 1] === '/' ? path : `${path}/`;
  return (http: HttpClient) => {
    return new TranslateHttpLoader(http, `./assets/i18n/${path}`, '.json');
  };
}
