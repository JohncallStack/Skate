import { Injectable } from '@angular/core';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  filterImagesByType(images: Image[], type: string): Image[] {
    return images.filter(image => image.type === type);
  }


  
}
