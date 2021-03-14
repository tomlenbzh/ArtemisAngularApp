import { Injectable } from '@angular/core';
import { PlatformService } from '@app/shared/services/platform/platform.service';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private platformService: PlatformService) { }

  /**
   * Binds an event listener to a type and a function
   *
   * @param type: string
   * @param listener: any
   * @param options: boolean
   */
  public setEventListener(type: string, listener: any, options: boolean): void {
    if (this.platformService.isPlatformBrowser()) {
      window.addEventListener(type, listener, options);
    }
  }

  /**
   * Removes an existing event listener
   *
   * @param type: string
   * @param listener: any
   * @param options: boolean
   */
  public removeEventListener(type: string, listener: any, options: boolean): void {
    if (this.platformService.isPlatformBrowser()) {
      window.removeEventListener(type, listener, options);
    }
  }
}
