import {Component,Input, SimpleChanges,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skatepark } from '../../../../models/skatepark.model';
import { RampsComponent } from './ramps/ramps.component';
import { LedgesComponent } from "./ledges/ledges.component";
import { BanksComponent } from './banks/banks.component';
import { RailsComponent } from './rails/rails.component';
import { StairsComponent } from "./stairs/stairs.component";
import { OtherComponent } from "./other/other.component";

@Component({
  selector: 'app-obstacles-tab',
  standalone: true,
  imports: [CommonModule, RampsComponent, LedgesComponent, BanksComponent, RailsComponent, StairsComponent, OtherComponent],
  templateUrl: './obstacles-tab.component.html',
  styleUrl: './obstacles-tab.component.scss',
})
export class ObstaclesTabComponent  {
  
@Input() park?: Skatepark; 

activeTab:string = 'ramps';

setActiveTab(tab:string):void {
  this.activeTab = tab;
}


}


  // constructor() {
  //   console.log('Constructor - Park data:', this.park);
  // }

  // ngOnInit(): void {
  //   console.log('ngOnInit - Park data:', this.park);
  // }

  // rampsContent: Image[] = [];
  // ledgesContent: Image[] = [];
  // stairsContent: Image[] = [];
  // railsContent: Image[] = [];
  // banksContent: Image[] = [];
  // otherContent: Image[] = [];

  // private sliderService = inject(SliderService);
  // private filterService = inject(FilterService);

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['park'] && this.park) {
  //     console.log('Park data updated:', this.park);
  //     this.filterImages();
  //     this.checkContent();
  //   }
  // }

  // ngAfterViewInit(): void {
  //   console.log('Park data on ngAfterViewInit:', this.park); // Log the park data
  //   if (this.park) {
  //     this.filterImages();
  //     this.checkContent();

  //     //Start the slider if content is available
  //     // if (this.contentAvailable) {
  //       console.log('Starting slider with content:');
  //       setTimeout(() => {
  //         this.sliderService.initializeSlider(this.slides.toArray());
  //       });
  //       console.log('Slides available for slider:', this.slides.toArray());
  //     }
  //   // }else {
  //   //   console.log('Park data is undefined or null on init');
  //   // }
  // }

  // filterImages(): void {
  //   if (this.park?.images) {
  //     this.rampsContent = this.filterService.filterImagesByType(
  //       this.park?.images,
  //       'ramps'
  //     );console.log('Filtered ramps:', this.rampsContent);
  //     this.ledgesContent = this.filterService.filterImagesByType(
  //       this.park?.images,
  //       'ledges'
  //     ); console.log('Filtered ledges:', this.ledgesContent);
  //     this.stairsContent = this.filterService.filterImagesByType(
  //       this.park?.images,
  //       'stairs'
  //     ); console.log('Filtered stairs:', this.stairsContent);

  //     this.railsContent = this.filterService.filterImagesByType(
  //       this.park?.images,
  //       'rails'
  //     );         console.log('Filtered rails:', this.railsContent);

  //     this.banksContent = this.filterService.filterImagesByType(
  //       this.park?.images,
  //       'banks'
  //     );         console.log('Filtered banks:', this.banksContent);

  //     this.otherContent = this.filterService.filterImagesByType(
  //       this.park?.images,
  //       'other'
  //     );         console.log('Filtered other:', this.otherContent);

  //   }else {
  //     console.error('Park images are undefined or null at the filtering stage');
  // }
  // }

  // rampsContentAvailable = false;
  // ledgesContentAvailable = false;
  // stairsContentAvailable = false;
  // railsContentAvailable = false;
  // banksContentAvailable = false;
  // otherContentAvailable = false;

  // checkContent(): void {
  //   console.log('Checking content availability...');
  //   if (this.rampsContent.length > 0) {
  //     this.rampsContentAvailable = true;
  //   }
  //    if (this.ledgesContent.length > 0) {
  //     this.ledgesContentAvailable = true;
  //   }
  //    if (this.stairsContent.length > 0) {
  //     this.stairsContentAvailable = true;
  //   } 
  //    if (this.railsContent.length > 0) {
  //     this.railsContentAvailable = true;
  //   }  
  //    if (this.banksContent.length > 0) {
  //     this.banksContentAvailable = true;
  //   } 
  //    if (this.otherContent.length > 0) {
  //     this.otherContentAvailable = true;}  
  // }

  // prevSlide(): void {
  //   this.sliderService.prevSlide(this.slides.toArray());
  // }

  // nextSlide(): void {
  //   this.sliderService.nextSlide(this.slides.toArray());
  // }

  // ngOnDestroy(): void {
  //   this.sliderService.stopSlider();
  // }



// if (
//   //     this.rampsContent.length > 0 ||
//   //     this.ledgesContent.length > 0 ||
//   //     this.stairsContent.length > 0 ||
//   //     this.railsContent.length > 0 ||
//   //     this.banksContent.length > 0 ||
//   //     this.otherContent.length > 0
//   //   ) {
//   //     this.contentAvailable = true;
//   //     console.log('Content is available:', this.contentAvailable);
//   //   }else {
//   //     console.log('No content available.');
//   // }