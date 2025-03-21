import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { jarallax, jarallaxVideo } from 'jarallax';

@Component({
  selector: 'app-title-image',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './title-image.component.html',
  styleUrl: './title-image.component.scss'
})
export class TitleImageComponent {

  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() image: string = '';
  @Input() sizes: number[] = [575, 767, 991, 1199, 1399, 1599, 1919];

  // Generate srcset dynamically based on available image sizes
  get srcset(): string {
    const basePath = this.image.replace(/(\.\w+)$/, ''); // Remove file extension
    const extension = this.image.match(/\.\w+$/) || ['jpg', 'webp', 'avif']; // Add more formats as needed

  // Generate srcset with width descriptors
    return this.sizes
    .map((width) => `${basePath}-${width}w${extension} ${width}w`)
    .join(', ');
    }

  // Default fallback image (largest size)
  get defaultImage(): string {
    const basePath = this.image.replace(/(\.\w+)$/, ''); // Remove file extension
    const extension = this.image.match(/\.\w+$/)?.[0] || '.webp'; // Extract file extension
    return `${basePath}-1919w${extension}`;
  }

  ngOnInit(): void {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2,
    }); 
    console.log('Generated srcset:', this.srcset);
    console.log('Default image:', this.defaultImage);  
  }

  // constructor(private imageKitService: ImageKitService) { }

  // getImageUrl(image: Image): string {
  //   return this.imageKitService.getOptimizedImage(image, 600, 400); // Adjust dimensions as needed
  // }

}
