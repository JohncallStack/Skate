import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-height-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-height-2.component.html',
  styleUrl: './test-height-2.component.scss',
})
export class TestHeight2Component {
  @Input() imagePath: string = '';
  @Input() imageQuality: number = 100;
  @Input() backgroundOffset: number = 0;

  backgroundImageUrl = '';
  lowResImage = '';
  imageLoaded = false;
  imagekitBaseUrl = 'https://ik.imagekit.io/hmlx2ect7/';
  containerHeight = 300; //Default height
  imageHeight = 0;

  ngOnInit() {
    this.imageLoaded = false; // Ensures each instance starts fresh
    this.updateImage();
    this.updateBackgroundOffset()
  }
  
  @HostListener('window:resize')
  updateImage() {
    const screenWidth = window.innerWidth;
    let imageHeight: number; // Set breakpoints based on height

    if (screenWidth < 400) {
      imageHeight = 301;
    } else if (screenWidth < 450) {
      imageHeight = 400;
    } else if (screenWidth < 768) {
      imageHeight = 600;
    } else if (screenWidth < 1200) {
      imageHeight = 1024;
    } else {
      imageHeight = 1600;
    }

    console.log('Viewport Width:', screenWidth);
    console.log('Selected Image Height:', imageHeight);

    if(imageHeight  !== this.containerHeight){
      this.containerHeight = imageHeight;
      console.log('Updated Container Height:', this.containerHeight);
      this.backgroundImageUrl = this.generateImageKitUrl(imageHeight);
      this.lowResImage = this.generateImageKitUrl(200); //LR placeholder
      this.updateContainerHeight(imageHeight); // Update container height dynamically
      this.preloadImage();
    }

  }

  updateBackgroundOffset(){
    const screenWidth = window.innerWidth;

    if (screenWidth < 400) {
      this.backgroundOffset = 301;
    } else if (screenWidth < 450) {
      this.backgroundOffset = 460;
    } else if (screenWidth < 768) {
      this.backgroundOffset = 300;
    } else if (screenWidth < 1200) {
      this.backgroundOffset = 60;
    } else {
      this.backgroundOffset = 60;
    }

    return this.backgroundOffset;
  }

  generateImageKitUrl(height: number) {
    return `${this.imagekitBaseUrl}${this.imagePath}?tr=h-${height},q-${this.imageQuality}`;
  }

  updateContainerHeight(height: number) {
    this.containerHeight = height;
    console.log('Updated Container Height:', this.containerHeight);
    return this.containerHeight;
  }

  preloadImage() {
    console.log('Preloading Image:', this.backgroundImageUrl);
    this.imageLoaded = false; // Reset before loading

    if(!this.backgroundImageUrl) return;
    const img = new Image();
    img.src = this.backgroundImageUrl;
    img.onload = () => {
      this.imageLoaded = true;
    };
  }


}
