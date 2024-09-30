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
  selector: 'app-rails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rails.component.html',
  styleUrl: './rails.component.scss',
})
export class RailsComponent {
  @ViewChildren('slide') slides!: QueryList<ElementRef<HTMLImageElement>>;
  @ViewChild('sliderContainer') sliderContainer!: ElementRef;
  @Input() park?: Skatepark;

  constructor() {
    console.log('Constructor - Park data coming from rails:', this.park);
  }

  ngOnInit(): void {
    console.log('ngOnInit - Park data coming from rails:', this.park);
  }

  railsContent: Image[] = [];

  private sliderService = inject(SliderService);
  private filterService = inject(FilterService);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['park'] && changes['park'].currentValue) {
      this.park = changes['park'].currentValue;
      console.log('Park data updated:', this.park);
      this.filterImages();
      this.checkContent();
    }
  }
  
  ngAfterViewInit(): void {
    console.log('Park data on ngAfterViewInit:', this.park);
    if (this.railsContent.length > 0) {
      console.log('Starting slider with content:');
      setTimeout(() => {
        this.sliderService.initializeSlider(this.slides.toArray());
      });
      console.log('Slides available for slider:', this.slides.toArray());
    }
  }

  filterImages(): void {
    if (this.park?.images) {
      this.railsContent = this.filterService.filterImagesByType(
        this.park?.images,
        'rails'
      );
    }
  }
  railsContentAvailable = false;

  checkContent(): void {
    if (this.railsContent.length > 0) {
      this.railsContentAvailable = true;
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
