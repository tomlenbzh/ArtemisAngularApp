import { LANGUAGES } from '../constants/languages';

/* ****************************** */

export interface MenuItem {
  title?: string;
  route?: string;
  active?: boolean;
  children?: MenuItem[];
  flag?: string;
  language?: LANGUAGES;
  languageLabel?: string;
}

export interface MenuConfig {
  multi?: boolean;
}
