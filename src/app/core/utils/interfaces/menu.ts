import { LANGUAGES } from '../constants/languages';

// export interface MenuLogo {
//   large: string;
//   small: string;
// }

// export interface NavItem {
//   label: string;
//   route?: string;
//   children?: NavItem[];
// }

// export interface LanguageItem {
//   label: string;
//   lang: LANGUAGES;
// }

// export interface SocialNetworkItem {
//   label: string;
//   link: string;
// }

// export interface Menu {
//   logo: MenuLogo;
//   items: NavItem[];
//   languages?: LanguageItem[];
//   social?: SocialNetworkItem[];
// }


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
