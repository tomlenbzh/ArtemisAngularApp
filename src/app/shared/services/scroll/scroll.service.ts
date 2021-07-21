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
   * @param   { string }    type        The type of event
   * @param   { any }       listener    The listener object
   * @param   { boolean }   options     Listener specific options
   */
  public setEventListener(type: string, listener: any, options: boolean): void {
    this.platformService.isPlatformBrowser() && (window.addEventListener(type, listener, options));
  }

  /**
   * Removes an existing event listener
   *
   * @param   { string }    type        The type of event
   * @param   { any }       listener    The listener object
   * @param   { boolean }   options     Listener specific options
   */
  public removeEventListener(type: string, listener: any, options: boolean): void {
    this.platformService.isPlatformBrowser() && window.removeEventListener(type, listener, options);
  }
}
