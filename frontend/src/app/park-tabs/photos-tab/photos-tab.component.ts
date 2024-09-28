import { ParkTabsComponent } from './../park-tabs.component';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photos-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photos-tab.component.html',
  styleUrl: './photos-tab.component.scss'
})
export class PhotosTabComponent {
  @ViewChildren('slide') slides!: QueryList<ElementRef<HTMLImageElement>>;
  @ViewChild('sliderContainer') sliderContainer!: ElementRef;

slideIndex: number = 0;
intervalId:any = null;

images: string [] = [
  'assets/TM_Black.webp',
  'assets/TM_Blue.webp',
  'assets/TM_Green.webp'
]

ngAfterViewInit(): void {
  setTimeout(() => {
    this.initializeSlider();
  });}

initializeSlider(): void {
  if (this.slides.length > 0) {
    this.showSlide(this.slideIndex)
    this.intervalId = setInterval(() => this.nextSlide(), 5000);
  }
}

showSlide(index: number): void {
  const slidesArray = this.slides.toArray();

   // Debugging logs
   console.log('Slides length:', slidesArray.length);
   console.log('Current slide index:', index);

   if (slidesArray.length === 0) {
    return;
  }

  if ( index >= slidesArray.length) {
    this.slideIndex = 0;
  }else if(index < 0){
    this.slideIndex = slidesArray.length - 1;
  }else{
    this.slideIndex = index;
  }
  
  // slidesArray.forEach((slide) => {
  //   slide.nativeElement.classList.remove('displaySlide');
  // });
  // slidesArray[this.slideIndex].nativeElement.classList.add('displaySlide');

  // Hide all slides
  slidesArray.forEach((slide) => {
    slide.nativeElement.style.display = 'none'; // Hide all images
    slide.nativeElement.classList.remove('displaySlide');
  });

  // Show the current slide
  slidesArray[this.slideIndex].nativeElement.style.display = 'block'; // Show the current image
  slidesArray[this.slideIndex].nativeElement.classList.add('displaySlide'); // Add class to current image

}

prevSlide(): void {
  clearInterval(this.intervalId);
  this.showSlide(this.slideIndex - 1);
  // this.restartSlider();
}

nextSlide(): void {
  this.showSlide(this.slideIndex + 1);
  // this.restartSlider();
}

// restartSlider(): void {
//   this.intervalId = setInterval(() => this.nextSlide(), 5000);
// }

ngOnDestroy(): void {
  if (this.intervalId) {
    clearInterval(this.intervalId);
  }
}


}
