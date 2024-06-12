import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UtilitiesService {

  constructor() { }

  public static commonTimeout(action: () => void, milliseconds: number = UtilitiesService.commonTimeoutDelay): Promise<void> {
    return new Promise<void>(resolve => setTimeout(() => {
      action();
      resolve();
    }, milliseconds));
  }

  public static get timestampNow(): number {
    const now: Date = new Date();
    const timestamp: number = now.getTime(); 
    return timestamp;
  }

  public static get commonTimeoutDelay(): number {
    return 5000;
  }

  public static get portfolioPrefixStorageKey(): string {
    return 'lsPortfolioYR_';
  }

  public static isColliding(rect1: DOMRect, rect2: DOMRect): boolean {
    return !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);
  }

  public static isLocalStorageAvailable(): boolean {
    try {
      const test = 'test';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  public static formatTime(number: number): string {
    return String(number).padStart(2, '0');
  }

}
