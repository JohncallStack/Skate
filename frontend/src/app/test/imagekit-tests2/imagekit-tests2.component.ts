import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-imagekit-tests2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imagekit-tests2.component.html',
  styleUrl: './imagekit-tests2.component.scss'
})
export class ImagekitTests2Component {

  @Input() imagePath: string = '';
  @Input() imageQuality: number = 100; // Higher quality
  backgroundImageUrl = '';
  lowResImage = '';
  imagekitBaseUrl = 'https://ik.imagekit.io/hmlx2ect7/';
  imageLoaded = false; // Tracks if image is loaded

  ngOnInit() {
    this.lowResImage = this.generateImageKitUrl(200);
    this.backgroundImageUrl = this.generateImageKitUrl(1600);
    this.preloadImage();
  }

  generateImageKitUrl(width: number): string {
    return `${this.imagekitBaseUrl}${this.imagePath}?tr=w-${width},q-${this.imageQuality},f-auto,c-at_max`;
  }

  preloadImage() {
    const img = new Image();
    img.src = this.backgroundImageUrl;
    img.onload = () => {
      this.imageLoaded = true;
      document.body.classList.add('image-loaded'); // Ensures the class is applied globally
    };
  }

}
