import {
  Component,
  ElementRef,
  Input,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
  inject,
} from '@angular/core';
import { Skatepark } from '../../../../../models/skatepark.model';
import { SliderService } from '../../../../../services/slider.service';
import { FilterService } from '../../../../../services/filter.service';
import { Image } from '../../../../../models/image.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stairs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stairs.component.html',
  styleUrl: './stairs.component.scss',
})
export class StairsComponent {
  @ViewChildren('slide') slides!: QueryList<ElementRef<HTMLImageElement>>;
  @ViewChild('sliderContainer') sliderContainer!: ElementRef;
  @Input() park?: Skatepark;

  constructor() {
    console.log('Constructor - Park data coming from stairs:', this.park);
  }

  ngOnInit(): void {
    console.log('ngOnInit - Park data coming from stairs:', this.park);
  }

  stairsContent: Image[] = [];

  private sliderService = inject(SliderService);
  private filterService = inject(FilterService);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['park'] && this.park) {
      console.log('Park data updated:', this.park);
      this.filterImages();
      this.checkContent();
      console.log('Slides available for slider:', this.slides.toArray());
    }
  }

  ngAfterViewInit(): void {
    console.log('Park data on ngAfterViewInit:', this.park); // Log the park data
    if (this.park) {
      this.filterImages();
      this.checkContent();

      //Start the slider if content is available
      console.log('Starting slider with content:');
      setTimeout(() => {
        this.sliderService.initializeSlider(this.slides.toArray());
      });
      console.log('Slides available for slider:', this.slides.toArray());
    }
  }

  filterImages(): void {
    if (this.park?.images) {
      this.stairsContent = this.filterService.filterImagesByType(
        this.park?.images,
        'stairs'
      );
    }
  }
  stairsContentAvailable = false;

  checkContent(): void {
    if (this.stairsContent.length > 0) {
      this.stairsContentAvailable = true;
    }
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
