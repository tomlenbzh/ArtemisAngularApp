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
      { title: 'MENU.COACHING.CEO_COACHING', route: '' },
      { title: `MENU.COACHING.ORGANISATION_COACHING`, route: '' }
    ]
  }, {
    title: 'MENU.CONSULTING.CONSULTING',
    active: false,
    children: [
      { title: 'MENU.CONSULTING.CHANGE_MANAGEMENT', route: '' },
      { title: `MENU.CONSULTING.TEAM_BUILDING`, route: '' }
    ]
  }, {
    title: 'MENU.REFERENCES',
    active: false,
    route: 'references'
  }, {
    title: `MENU.TALENTS.TALENTS`,
    active: false,
    children: [
      { title: 'MENU.TALENTS.IDENTIFY_ASSETS', route: '' },
      { title: `MENU.TALENTS.LEADERSHIP_CAPACITY`, route: '' },
      { title: `MENU.TALENTS.TEAM_PERFORMANCE`, route: '' },
      { title: `MENU.TALENTS.EX_INDIVIDUAL_PROFILE`, route: '' },
      { title: `MENU.TALENTS.EX_TEAM_PROFILE`, route: '' },
    ]
  }, {
    title: `MENU.CONTACT`,
    active: false,
    route: 'contact'
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
