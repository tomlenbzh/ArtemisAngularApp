import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { LANGUAGES } from '@app/core/utils/constants/languages';
import { MenuLogo } from '@app/core/utils/constants/menu';
import { MenuItem } from '@app/core/utils/interfaces/menu';
import { getLanguageFlag } from '@app/shared/functions/images/get-language-flag';

@Component({
  selector: 'artemis-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() isOnTop: boolean;
  @Input() menuItems: MenuItem[] = [];
  @Input() currentLang: string;

  @Output() toggle: EventEmitter<any> = new EventEmitter();
  @Output() changeLang: EventEmitter<LANGUAGES> = new EventEmitter();

  logo = MenuLogo;
  currentLangFlag = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('currentLang') && this.currentLang) {
      this.currentLangFlag = getLanguageFlag(this.currentLang);
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
   * Returns true if the current menu item is the last in the list.
   * 
   * @param index           number        // The index of the current menu item
   */
  isLastItem(index: number): boolean {
    return index === this.menuItems.length - 1;
  }

  /**
   * Emits to the parent component to show the sidebar.
   */
   toggleMenu(): void {
    this.toggle.emit();
  }
}
