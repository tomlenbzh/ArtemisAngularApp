import { AfterViewInit, Component } from '@angular/core';
import { LANGUAGES } from '@app/core/utils/constants/languages';
import { MenuItems, SIDEBAR_ANIMATION_DURATION } from '@app/core/utils/constants/menu';
import { MenuItem } from '@app/core/utils/interfaces/menu';
import { PlatformService } from '@app/shared/services/platform/platform.service';
import { ScrollService } from '@app/shared/services/scroll/scroll.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'artemis-layout-container',
  templateUrl: './layout.container.component.html',
  styleUrls: ['./layout.container.component.scss'],
})
export class LayoutContainerComponent implements AfterViewInit {

  menuItems: MenuItem[] = MenuItems;
  options = { multi: false };

  isOnTop = true;
  opened = false;
  showSidenav = false;
  currentLang: string;

  constructor(
    private platformService: PlatformService,
    private scrollService: ScrollService,
    private translateService: TranslateService
  ) {
    this.currentLang = this.translateService.currentLang;
  }

  ngAfterViewInit(): void {
    this.scrollService.setEventListener('scroll', this.onScroll.bind(this), true);
  }

  /**
   * Sets the new language of the application.
   * 
   * @param lang            LANGUAGES     // The app's new language
   */
  changeLanguage(lang: LANGUAGES): void {
    this.translateService.use(lang);
    setTimeout(() => this.currentLang = this.translateService.currentLang, 50);
  }

  /**
   * Opens or closes the sidebar component.
   */
  toggleSidebar(): void {
    if (!this.opened) {
      this.opened = true;
      setTimeout(() => this.showSidenav = this.opened, 50);
    } else {
      this.showSidenav = false;
      setTimeout(() => this.opened = this.showSidenav, SIDEBAR_ANIMATION_DURATION);
    }
  }

  /**
   * Checks if has scrolled down past 50 pixels.
   */
  private onScroll(): void {
    if (this.platformService.isPlatformBrowser()) {
      this.isOnTop = window.scrollY > 50 ? false : true;
    }
  }
}
