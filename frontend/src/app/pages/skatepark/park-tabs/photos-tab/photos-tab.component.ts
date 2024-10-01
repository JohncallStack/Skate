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
