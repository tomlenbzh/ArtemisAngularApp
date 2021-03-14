import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MenuConfig, MenuItem } from '@app/core/utils/interfaces/menu';
import { PlatformService } from '@app/shared/services/platform/platform.service';
import { LANGUAGES } from '@app/core/utils/constants/languages';
import { SIDEBAR_ANIMATION_DURATION } from '@app/core/utils/constants/menu';

@Component({
  selector: 'artemis-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('true', style({ transform: 'translate3d(0, 0, 0)' })),
      state('false', style({ transform: 'translate3d(-100%, 0, 0)' })),
      transition('true <=> false', animate(`${SIDEBAR_ANIMATION_DURATION}ms ease`))
    ]),
  ]
})
export class SidebarComponent {

  @Input() opened: boolean;
  @Input() showSidenav: boolean;
  @Input() menuItems: MenuItem[];
  @Input() options: MenuConfig;
  @Input() currentLang: string;

  @Output() toggle: EventEmitter<boolean> = new EventEmitter();
  @Output() changeLang: EventEmitter<LANGUAGES> = new EventEmitter();

  constructor(private platformService: PlatformService) {}

  /**
   * Closes the sidebar if resizing the window over 600px while the sidebar component is open.
   *
   * @param event           any           // The triggered event when resizing the window
   */
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (this.platformService.isPlatformBrowser() && this.opened && event.target.innerWidth > 600) {
      this.closeAll();
    }
  }

  /**
   * Detects animation state and closes the sidebar component when the animation is finished.
   *
   * @param event           any           // The current animation
   */
  slideInOutEnd(event: any): void {
    if (event.fromState === true && event.toState === false) {
      this.opened = false;
    }
  }

  /**
   * Emits the new language in which the app should be translated.
   *
   * @param lang            string        // The app's new language
   */
  changeLanguage(lang: LANGUAGES): void {
    this.changeLang.emit(lang);
  }

  /**
   * Closes all the sidebar's items.
   *
   * @param isSubItem       boolean       // Is the current menu item a child item?
   */
  closeSidenav(isSubItem: boolean): void {
    if (this.opened === true) {
      if (!isSubItem) {
        this.showSidenav = false;
        setTimeout(() => this.closeAll(), 500);
      } else {
        setTimeout(() => {
          this.showSidenav = false;
          setTimeout(() => this.closeAll(), 400);
        }, 400);
      }
    }
  }

  /**
   * Emits to the parent component to hide the sidebar.
   */
   toggleSidebar(): void {
    this.toggle.emit();
  }

  /**
   * Emits to parent component to close sidenav component
   */
  private closeAll(): void {
    this.toggleSidebar();
    this.closeAllSubMenus();
  }

  /**
   * Loops through all menus and closes them
   */
  private closeAllSubMenus(): void {
    this.menuItems.map((item: MenuItem) => {
      if (item?.active) {
        item.active = false;
      }
    });
  }
}
