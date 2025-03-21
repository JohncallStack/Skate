import { Component, Input, HostListener, OnInit, Host } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imagekit-test-set-height',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imagekit-test-set-height.component.html',
  styleUrl: './imagekit-test-set-height.component.scss'
})
export class ImagekitTestSetHeightComponent implements OnInit {

@Input() imagePath: string = '';
@Input() imageQuality: number = 100;

backgroundImageUrl = '';
lowResImage = '';
imageLoaded = false;
imagekitBaseUrl = 'https://ik.imagekit.io/hmlx2ect7/';
containerHeight = 300; //Default height
imageHeight = 300;

ngOnInit(){
  this.updateImage();
}

ngOnChanges(){
  if(this.imagePath)
  {this.updateImage();}
}

@HostListener('window:resize')
updateImage(){
  const screenWidth = window.innerWidth;
  let newHeight: number;    // Set breakpoints based on height


  if(screenWidth < 400){
    newHeight = 300}
    else if (screenWidth < 450){
      newHeight = 400;
    }
    else if (screenWidth < 768){
      newHeight = 600;}
    else if (screenWidth < 1200){
      newHeight = 1024;}
    else {  
      newHeight = 1600;
    }

    console.log('Viewport Width:', screenWidth);
    console.log('Selected Image Height:', newHeight);

    if(newHeight !== this.containerHeight){
      this.containerHeight = newHeight;
      this.backgroundImageUrl = this.generateImageKitUrl(newHeight);
      this.lowResImage = this.generateImageKitUrl(200); //LR placeholder
      this.preloadImage();
      this.updateContainerHeight(newHeight); // Update container height dynamically
    }
}

updateContainerHeight(height: number) {
  this.containerHeight =  height;
  console.log('Updated Container Height:', this.containerHeight);
  return this.containerHeight;
}

generateImageKitUrl(height: number): string {
  const imageURL = `${this.imagekitBaseUrl}${this.imagePath}?tr=h-${height},q-${this.imageQuality},f-auto,c-at_max`;
  console.log('Generated ImageKit URL:', imageURL);
  return imageURL;
}

preloadImage() {
  if(!this.backgroundImageUrl) return;
  const img = new Image();
  img.src = this.backgroundImageUrl;
  img.onload = () => {
    this.imageLoaded = true;
  };
}

}
