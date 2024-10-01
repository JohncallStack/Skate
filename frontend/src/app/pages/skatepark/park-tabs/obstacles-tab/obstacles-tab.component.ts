import {Component,Input, SimpleChanges,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skatepark } from '../../../../models/skatepark.model';
import { RampsComponent } from './ramps/ramps.component';
import { LedgesComponent } from "./ledges/ledges.component";
import { BanksComponent } from './banks/banks.component';
import { RailsComponent } from './rails/rails.component';
import { StairsComponent } from "./stairs/stairs.component";
import { OtherComponent } from "./other/other.component";
import { ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-obstacles-tab',
  standalone: true,
  imports: [CommonModule, RampsComponent, LedgesComponent, BanksComponent, RailsComponent, StairsComponent, OtherComponent],
  templateUrl: './obstacles-tab.component.html',
  styleUrl: './obstacles-tab.component.scss',
})
export class ObstaclesTabComponent  {
  
@Input() park?: Skatepark; 
@ViewChild(RampsComponent) rampsComponent!: RampsComponent;
@ViewChild(LedgesComponent) ledgesComponent!: LedgesComponent;
@ViewChild(RailsComponent) railsComponent!: RailsComponent;
@ViewChild(BanksComponent) banksComponent!: BanksComponent;
@ViewChild(StairsComponent) stairsComponent!: StairsComponent;
@ViewChild(OtherComponent) otherComponent!: OtherComponent;

activeTab:string = 'ramps';
  
setActiveTab(tab:string):void {
  this.activeTab = tab;
}

isRampsContentAvailable(): boolean {
  return this.rampsComponent?.rampsContentAvailable;
}

get isLedgesContentAvailable(): boolean {
  return this.ledgesComponent?.ledgesContentAvailable;
}

isRailsContentAvailable(): boolean {
  return this.railsComponent?.railsContentAvailable;
}

isBanksContentAvailable(): boolean {
  return this.banksComponent?.banksContentAvailable;
}

isStairsContentAvailable(): boolean {
  return this.stairsComponent?.stairsContentAvailable; 
}

isOtherContentAvailable(): boolean {
  return this.otherComponent?.otherContentAvailable;
}

// Define properties to conditionally display tabs
ledgesTabAvailable: boolean = false;
railsTabAvailable: boolean = false;
banksTabAvailable: boolean = false;
stairsTabAvailable: boolean = false;

ngOnInit() {
  this.checkTabAvailability();
}

checkTabAvailability() {
  if (this.park) {
    // Set tab availability based on the skatepark name
    this.ledgesTabAvailable = this.park.name === 'Ennis Skatepark'; // Available only for Ennis
    this.railsTabAvailable = true; // Always available for all parks
    this.banksTabAvailable = true; // Always available for all parks
    
    // Stairs available for all except Shannon Skatepark
    this.stairsTabAvailable = this.park.name !== 'Shannon Skatepark';

    // For Shannon Pumptrack, only ramps are available
    if (this.park.name === 'Shannon Pump Track') {
      this.ledgesTabAvailable = false; // Not available
      this.railsTabAvailable = false; // Not available
      this.banksTabAvailable = false; // Not available
      this.stairsTabAvailable = false; // Not available
    }
  }
}



}

// handleContentAvailable(available: boolean): void {
  //   this.ledgesContentAvailable = available;
  //   console.log('Ledges content available:', available);}

  // ngOnChanges(changes: SimpleChanges): void {
//   this.checkContentAvailability();
// }

// ngAfterViewInit() {
//   this.subscription = this.ledgesComponent.ledgesContentAvailable$.subscribe(
//     (available) => {
//       this.ledgesContentAvailable = available;
//       console.log('Ledges content available:', available);
//     }
//   );
// }