import {
  Component,
  HostListener,
  Input,
  inject,
  Injectable,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageKitByHeightService } from '../../services/image-kit-by-height.service';
import { ScreensizeService } from '../../services/screensize.service';

@Component({
  selector: 'app-parralax-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parralax-image.component.html',
  styleUrl: './parralax-image.component.scss',
})
export class ParralaxImageComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() imagePath: string = '';
  @Input() imageQuality: number = 100;
  @Input() backgroundOffset: number = 0;

  private screenSizeService = inject(ScreensizeService);
  private imageKitByHeightService = inject(ImageKitByHeightService);

  backgroundImageUrl = '';
  lowResImage = '';
  imageLoaded = false;
  containerHeight = 300; //Default height
  imageHeight = 0;

  ngOnInit() {
    this.imageLoaded = false; // Ensures each instance starts fresh
    this.updateImage();
    // this.updateBackgroundOffset()
  }

  @HostListener('window:resize')
  updateImage() {
    const screenWidth = this.screenSizeService.getScreenSize();
    const imageHeight = this.screenSizeService.getImageHeight(screenWidth);

    console.log('Viewport Width:', screenWidth);
    console.log('Selected Image Height:', imageHeight);

    if (imageHeight <= 600) {
      this.containerHeight = imageHeight;
      this.updateContainerHeight(imageHeight);
    } else this.containerHeight = 600;

    console.log('Updated Container Height:', this.containerHeight);

    this.backgroundImageUrl = this.imageKitByHeightService.generateImageKitUrl(
      this.imagePath,
      imageHeight,
      100    
      );
    this.lowResImage = this.imageKitByHeightService.generateImageKitUrl(
      this.imagePath,
      this.containerHeight,
      20
    ); //LR placeholder
    this.imageKitByHeightService.preloadImage(this.backgroundImageUrl, () => {
      this.imageLoaded = true;
    });
  }

  updateContainerHeight(height: number) {
    this.containerHeight = height;
    console.log('Updated Container Height:', this.containerHeight);
    return this.containerHeight;
  }
}
