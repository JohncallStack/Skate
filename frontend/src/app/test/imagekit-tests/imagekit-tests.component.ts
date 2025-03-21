import { Component, Input, HostListener, OnInit, Host } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imagekit-tests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imagekit-tests.component.html',
  styleUrl: './imagekit-tests.component.scss'
})
export class ImagekitTestsComponent {

@Input() imagePath: string = '';
@Input() imageQuality: number = 100;

backgroundImageUrl = '';
lowResImage = '';
imageLoaded = false;
imagekitBaseUrl = 'https://ik.imagekit.io/hmlx2ect7/';
lastBreakpoint = 0;

ngOnInit(){
  this.updateImage();
}

@HostListener('window:resize')
updateImage(){
  const screenWidth = window.innerWidth;
  let newBreakpoint: number;

  if(screenWidth < 400){
    newBreakpoint = 1600}
    else if (screenWidth < 450){
      newBreakpoint = 400;
    }
  else if (screenWidth < 768){
    newBreakpoint = 600;
  }else if (screenWidth < 1200){
    newBreakpoint = 1024;
  }else{  
    newBreakpoint = 1600;
  }

  if(newBreakpoint !== this.lastBreakpoint){
    this.lastBreakpoint = newBreakpoint;
    this.backgroundImageUrl = this.generateImageKitUrl(newBreakpoint);
    this.lowResImage = this.generateImageKitUrl(200); //LR placeholder
    this.preloadImage();
  }

}

generateImageKitUrl(width: number): string{
  const imageURL = `${this.imagekitBaseUrl}${this.imagePath}?tr=w-${width},q-${this.imageQuality},f-auto,c-at_max`;
  console.log('Image URL: ', imageURL);
  return imageURL;
}

preloadImage(){
  const img  = new Image();
  img.src = this.backgroundImageUrl;
  img.onload = () => {
    this.imageLoaded = true;
  }
}

}
