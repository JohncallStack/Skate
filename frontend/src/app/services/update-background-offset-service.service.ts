import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UpdateBackgroundOffsetServiceService {
  updateBackgroundOffset() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 400) return 301;
    else if (screenWidth < 450) return 460;
    else if (screenWidth < 768) return 300;
    else if (screenWidth < 1200) return 60;
    else return 60;
  }
}
