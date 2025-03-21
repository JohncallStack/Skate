import { Injectable } from '@angular/core';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageKitService {

  private baseUrl = 'https://ik.imagekit.io/hmlx2ect7';

  getOptimizedImage(image: Image, width: number, height: number, format: string = 'auto'): string {
    if (!image || !image.imageID) {
      return `${this.baseUrl}/default.jpg`; // Fallback image
    }return `${this.baseUrl}/${image.imageID}?tr=w-${width},h-${height},f-${format}`;

  }

}
