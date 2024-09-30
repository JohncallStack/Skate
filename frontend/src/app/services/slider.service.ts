import { Injectable, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SliderService {
  @ViewChildren('slide') slides!: QueryList<ElementRef<HTMLImageElement>>;
  
  slideIndex: number = 0;
  intervalId: any = null;

  initializeSlider(slides: ElementRef<HTMLImageElement>[]): void {
    if (slides.length > 0) {
      this.showSlide(slides, this.slideIndex);
      this.intervalId = setInterval(() => this.nextSlide(slides), 5000);
    }
  }

  showSlide(slides: ElementRef<HTMLImageElement>[], index: number): void {
    // const slidesArray = this.slides.toArray();

    // Debugging logs
    console.log('Slides length:', slides.length);
    console.log('Current slide index:', index);

    if (slides.length === 0) {
      return;
    }

    if (index >= slides.length) {
      this.slideIndex = 0;
    } else if (index < 0) {
      this.slideIndex = slides.length - 1;
    } else {
      this.slideIndex = index;
    }

    // Hide all slides
    slides.forEach((slide) => {
      slide.nativeElement.style.display = 'none'; // Hide all images
      slide.nativeElement.classList.remove('displaySlide');
    });

    // Show the current slide
    slides[this.slideIndex].nativeElement.style.display = 'block'; // Show the current image
    slides[this.slideIndex].nativeElement.classList.add('displaySlide'); // Add class to current image
  }

  nextSlide(slides: ElementRef<HTMLImageElement>[]): void {
    this.showSlide(slides, this.slideIndex + 1);
  }

  prevSlide(slides: ElementRef<HTMLImageElement>[]): void {
    clearInterval(this.intervalId);
    this.showSlide(slides, this.slideIndex - 1);
  }

  stopSlider(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  constructor() {}
}
