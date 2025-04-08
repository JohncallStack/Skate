import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScreensizeService {
  getScreenSize(): number {
    return window.innerWidth;
  }

  getImageHeight(screenWidth: number): number {
    if (screenWidth < 400) return 301;
    else if (screenWidth < 450) return 400;
    else if (screenWidth < 768) return 600;
    else return 1024;

  }
}

// getImageHeight(screenWidth: number): number {
//   if (screenWidth < 400) return 301;
//   else if (screenWidth < 450) return 400;
//   else if (screenWidth < 768) return 600;
//   else if (screenWidth < 1200) return 1024;
//   else return 1600;
// }
