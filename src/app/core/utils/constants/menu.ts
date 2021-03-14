import { MenuItem } from '@app/core/utils/interfaces/menu';
import { LANGUAGES } from './languages';

export const SIDEBAR_ANIMATION_DURATION = 400;

export const MenuLogo = 'assets/images/logos/top-left-white.png';

export const MenuItems: MenuItem[] = [
  {
    active: false,
    title: 'MENU.HOME',
    route: ''
  }, {
    title: 'MENU.ARTEMIS.ARTEMIS',
    active: false,
    children: [
      { title: 'MENU.ARTEMIS.ABOUT_US', route: '' },
      { title: 'MENU.ARTEMIS.APPROACH', route: '' },
      { title: 'MENU.ARTEMIS.PRINCIPLES', route: '' },
      { title: 'MENU.ARTEMIS.VALUES', route: '' },
      { title: 'MENU.ARTEMIS.ETHICS', route: '' }
    ]
  }, {
    title: 'MENU.COACHING.COACHING',
    active: false,
    children: [
      { title: 'MENU.COACHING.INDIVIDUAL_COACHING', route: '' },
      { title: `MENU.COACHING.TEAM_COACHING`, route: '' },
      { title: 'MENU.COACHING.TEAM_COACHING', route: '' },
      { title: `MENU.COACHING.TEAM_COACHING`, route: '' }
    ]
  }, {
    title: 'MENU.CONSULTING.CONSULTING',
    active: false,
    children: [
      { title: 'MENU.CONSULTING.CHANGE_MANAGEMENT', route: '' },
      { title: `MENU.CONSULTING.TEAM_BUILDING`, route: '' }
    ]
  }, {
    title: `MENU.CONTACT`,
    route: ''
  }, {
    active: false,
    children: [
      {
        flag: `assets/images/flags/${LANGUAGES.FR}.png`,
        language: LANGUAGES.FR,
        languageLabel: 'LANGUAGES.FRENCH'
      },
      {
        flag: `assets/images/flags/${LANGUAGES.EN}.png`,
        language: LANGUAGES.EN,
        languageLabel: 'LANGUAGES.ENGLISH'
      },
    ]
  }
];
