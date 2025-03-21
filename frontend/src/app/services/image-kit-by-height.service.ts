import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageKitByHeightService {
  private readonly imagekitBaseUrl = 'https://ik.imagekit.io/hmlx2ect7/';

  generateImageKitUrl(
    imagePath: string,
    height: number,
    quality: number
  ): string {
    return `${this.imagekitBaseUrl}${imagePath}?tr=h-${height},q-${quality}`;
  }

  preloadImage(imageUrl: string, callback: () => void): void {
    if (!imageUrl) return; // Prevents unnecessary execution
    const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        callback();
      };
    
  }
}
