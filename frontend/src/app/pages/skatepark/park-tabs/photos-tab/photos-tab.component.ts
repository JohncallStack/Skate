import { SliderService } from './../../../../services/slider.service';
import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
  Input,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skatepark } from '../../../../models/skatepark.model';
import { Image } from '../../../../models/image.model';


@Component({
  selector: 'app-photos-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photos-tab.component.html',
  styleUrl: './photos-tab.component.scss',
})
export class PhotosTabComponent {
  @Input() park?: Skatepark;
  @ViewChildren('slide') slides!: QueryList<ElementRef<HTMLImageElement>>;
  @ViewChild('sliderContainer') sliderContainer!: ElementRef;

  // slideIndex: number = 0;
  // intervalId: any = null;

  private sliderService = inject(SliderService);

  ngAfterViewInit(): void {
    setTimeout(() => {
      // console.log('Park data on ngAfterViewInit:', this.park); // Log the park data
      // console.log('Images array:', this.images); // Log the images array
      // this.initializeSlider();
      this.sliderService.initializeSlider(this.slides.toArray());
    });
  }

  get images(): string[] {
    const imageUrls = this.park?.images?.map(image => image.imageID) || []; // Map the image URLs
    console.log('Mapped image URLs:', imageUrls); // Log mapped image URLs
    return imageUrls;
  }

  prevSlide(): void {
    this.sliderService.prevSlide(this.slides.toArray());
  }

  nextSlide(): void {
    this.sliderService.nextSlide(this.slides.toArray());
  }

  ngOnDestroy(): void {
   this.sliderService.stopSlider();
  }

}

  // initializeSlider(): void {
  //   if (this.slides.length > 0) {
  //     this.showSlide(this.slideIndex);
  //     this.intervalId = setInterval(() => this.nextSlide(), 5000);
  //   }
  // }

  // showSlide(index: number): void {
  //   const slidesArray = this.slides.toArray();

  //   // Debugging logs
  //   console.log('Slides length:', slidesArray.length);
  //   console.log('Current slide index:', index);

  //   if (slidesArray.length === 0) {
  //     return;
  //   }

  //   if (index >= slidesArray.length) {
  //     this.slideIndex = 0;
  //   } else if (index < 0) {
  //     this.slideIndex = slidesArray.length - 1;
  //   } else {
  //     this.slideIndex = index;
  //   }

  //   // Hide all slides
  //   slidesArray.forEach((slide) => {
  //     slide.nativeElement.style.display = 'none'; // Hide all images
  //     slide.nativeElement.classList.remove('displaySlide');
  //   });

  //   // Show the current slide
  //   slidesArray[this.slideIndex].nativeElement.style.display = 'block'; // Show the current image
  //   slidesArray[this.slideIndex].nativeElement.classList.add('displaySlide'); // Add class to current image
  // }

  // prevSlide(): void {
  //   // clearInterval(this.intervalId);
  //   // this.showSlide(this.slideIndex - 1);
  //   // this.restartSlider();
  // }

  // nextSlide(): void {
    // this.showSlide(this.slideIndex + 1);
    // this.restartSlider();
  // }

  // ngOnDestroy(): void {
    // if (this.intervalId) {
    //   clearInterval(this.intervalId);
    // }
  // }
