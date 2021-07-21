import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { LANGUAGES } from '@app/core/utils/constants/languages';
import { MenuConfig, MenuItem } from '@app/core/utils/interfaces/menu';
import { getLanguageFlag } from '@app/shared/functions/images/get-language-flag';

@Component({
  selector: 'artemis-sidebar-accordion',
  templateUrl: './sidebar-accordion.component.html',
  styleUrls: ['./sidebar-accordion.component.scss'],
  animations: [
    trigger('rotateIcon', [
      state('false', style({ transform: 'rotate(0deg)' })),
      state('true', style({ transform: 'rotate(90deg)' })),
      transition('false <=> true', animate('0.2s')),
    ])
  ]
})
export class SidebarAccordionComponent implements OnInit, OnChanges {

  @Input() menuItems: MenuItem[];
  @Input() options: MenuConfig;
  @Input() currentLang: string;

  @Output() closeSide: EventEmitter<boolean> = new EventEmitter();
  @Output() changeLang: EventEmitter<LANGUAGES> = new EventEmitter();

  currentLangFlag = null;
  private config: MenuConfig;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.config = this.mergeConfig(this.options);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('currentLang')) {
      this.currentLangFlag = getLanguageFlag(this.currentLang);
    }
  }

  /**
   * Emits the new language in which the app should be translated.
   *
   * @param     { string }      lang      The app's new language
   */
  changeLanguage(lang: LANGUAGES): void {
    this.changeLang.emit(lang);
  }

  /**
   * Determines what action trigger when clicking a menu item.
   *
   * @param     { MenuItem }      item              The current menu item
   * @param     { number }        index             The current menu item's index
   * @param     { boolean }       isSubMenuItem     Is the current menu item a child item?
   */
  manageAction(item: MenuItem, index: number, isSubMenuItem: boolean): void {
    if (item?.children) {
      if (!this.config.multi) {
        this.menuItems
          .filter((menu: MenuItem, index: number) => index !== index && menu.active)
          .map((menu: MenuItem) => menu.active = !menu.active);
      }
      this.toggleAccordionItem(index);
    } else {
      if (isSubMenuItem === false) {
        this.closeSidenav(isSubMenuItem);
        this.navigateTo(item.route);
      } else {
        item?.flag ? this.changeLanguage(item.language) : this.navigateTo(item.route);
        this.toggleAccordionItem(index);
        this.closeSidenav(isSubMenuItem);
      }
    }
  }

  /**
   * Edits the accordion's configuration according to new options.
   *
   * @param     { MenuConfig }      options       The menu configuration options
   */
  private mergeConfig(options: MenuConfig): MenuConfig {
    return { multi: true, ...options };
  }

  /**
   * Emits to the parent component to close the sidebar component.
   *
   * @param     { boolean }     status      The new status of the sidebar component
   */
   private closeSidenav(status: boolean): void {
    this.closeSide.emit(status);
  }

  /**
   * Toggles the status of an accordion item.
   *
   * @param     { number }      index     The index of the item that should be toggled.
   */
  private toggleAccordionItem(index: number): void {
    this.menuItems[index].active = !this.menuItems[index].active;
  }

  /**
   * Navigates to the specified route.
   *
   * @param     { string }      route     The new route to navigate to.
   */
  private navigateTo(route: string): void {
    this.router.navigateByUrl(route);
  }
}
