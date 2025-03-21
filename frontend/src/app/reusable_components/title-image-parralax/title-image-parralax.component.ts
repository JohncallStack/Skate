import { Component, HostListener, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageKitByHeightService } from '../../services/image-kit-by-height.service';
import { ScreensizeService } from '../../services/screensize.service';
import { UpdateBackgroundOffsetServiceService } from '../../services/update-background-offset-service.service';

@Component({
  selector: 'app-title-image-parralax',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title-image-parralax.component.html',
  styleUrl: './title-image-parralax.component.scss',
})
export class TitleImageParralaxComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() imagePath: string = '';
  @Input() imageQuality: number = 100;
  @Input() backgroundOffset: number = 0;

  private screenSizeService = inject(ScreensizeService);
  private imageKitByHeightService = inject(ImageKitByHeightService);
  private updateBackgroundOffset = inject(UpdateBackgroundOffsetServiceService)

  backgroundImageUrl = '';
  lowResImage = '';
  imageLoaded = false;
  containerHeight = 300; //Default height
  imageHeight = 0;

  ngOnInit() {
    this.imageLoaded = false; // Ensures each instance starts fresh
    this.updateImage();
    this.updateBackgroundOffset.updateBackgroundOffset();
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
