import { LANGUAGES } from '@app/core/utils/constants/languages';

export const getLanguageFlag = (lang: string | LANGUAGES): string => {
  return `assets/images/flags/${lang}.png`;
};
