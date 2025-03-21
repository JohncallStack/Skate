import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-middle-image',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './middle-image.component.html',
  styleUrl: './middle-image.component.scss'
})
export class MiddleImageComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() sizes: number[] = [575, 767, 991, 1199, 1399, 1599, 1919];

 // Generate srcset dynamically based on available image sizes
 get srcset(): string {
  const basePath = this.image.replace(/(\.\h+)$/, ''); // Remove file extension
  const extension = this.image.match(/\.\h+$/) || ['jpg', 'webp', 'avif']; // Add more formats as needed

// Generate srcset with width descriptors
  return this.sizes
  .map((height) => `${basePath}-${height}h${extension} ${height}h`)
  .join(', ');
  }

 // Default fallback image (largest size)
 get defaultImage(): string {
  const basePath = this.image.replace(/(\.\h+)$/, ''); // Remove file extension
  const extension = this.image.match(/\.\h+$/)?.[0] || '.webp'; // Extract file extension
  return `${basePath}-600h${extension}`;
}

}
