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
  selector: 'app-ramps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ramps.component.html',
  styleUrl: './ramps.component.scss',
})
export class RampsComponent {
  @ViewChildren('slide') slides!: QueryList<ElementRef<HTMLImageElement>>;
  @ViewChild('sliderContainer') sliderContainer!: ElementRef;
  @Input() park?: Skatepark;

  constructor() {
    console.log('Constructor - Park data coming from Ramps:', this.park);
  }

  ngOnInit(): void {
    console.log('ngOnInit - Park data coming from ramps:', this.park);
  }

  rampsContent: Image[] = [];

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
    if (this.rampsContent.length > 0) {
      console.log('Starting slider with content:');
      setTimeout(() => {
        this.sliderService.initializeSlider(this.slides.toArray());
      });
      console.log('Slides available for slider:', this.slides.toArray());
    }
  }

  filterImages(): void {
    if (this.park && this.park?.images) {
      this.rampsContent = this.filterService.filterImagesByType(
        this.park?.images,
        'ramps'
      );
    }
  }
  rampsContentAvailable = false;

  checkContent(): void {
    if (this.rampsContent.length > 0) {
      this.rampsContentAvailable = true;
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
