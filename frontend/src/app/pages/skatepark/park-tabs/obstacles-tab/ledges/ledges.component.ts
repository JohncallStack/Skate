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
  selector: 'app-ledges',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ledges.component.html',
  styleUrl: './ledges.component.scss',
})
export class LedgesComponent {
  @ViewChildren('slide') slides!: QueryList<ElementRef<HTMLImageElement>>;
  @ViewChild('sliderContainer') sliderContainer!: ElementRef;
  @Input() park?: Skatepark;

  constructor() {
    console.log('Constructor - Park data coming from Ledges:', this.park);
  }

  ngOnInit(): void {
    console.log('ngOnInit - Park data coming from ledges:', this.park);
  }

  // private ledgesContentAvailableSubject = new BehaviorSubject<boolean>(false);
  // ledgesContentAvailable$ = this.ledgesContentAvailableSubject.asObservable();

  ledgesContent: Image[] = [];

  private sliderService = inject(SliderService);
  private filterService = inject(FilterService);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['park'] && this.park) {
      this.filterImages();
      this.checkContent();
    }
  }

  ngAfterViewInit(): void {
    if (this.park) {
      this.filterImages();
      this.checkContent();
      setTimeout(() => {
        this.sliderService.initializeSlider(this.slides.toArray());
      });
    }
  }

  filterImages(): void {
    if (this.park?.images) {
      this.ledgesContent = this.filterService.filterImagesByType(
        this.park?.images,
        'ledges'
      );
    }
  }

  ledgesContentAvailable = false;

  checkContent(): void {
    if (this.ledgesContent.length > 0) {
      this.ledgesContentAvailable = true;
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

// checkContent(): void {
//   const available = this.ledgesContent.length > 0;
//   this.contentAvailable.emit(available);
//   this.cdr.detectChanges();
//   console.log('Ledges content available:', available);
// }
