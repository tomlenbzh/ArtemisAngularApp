import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  /**
   * Returns whether or not the app is running on the browser.
   *
   * @returns { boolean }
   */
  public isPlatformBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
