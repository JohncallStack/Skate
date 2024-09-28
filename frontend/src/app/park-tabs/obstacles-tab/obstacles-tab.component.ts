import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-obstacles-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obstacles-tab.component.html',
  styleUrl: './obstacles-tab.component.scss',
})
export class ObstaclesTabComponent {
  rampsContent: string | null = null;
  ledgesContent: string | null = null;
  stairsContent: string | null = null;
  railsContent: string | null = null;
  banksContent: string | null = null;
  otherContent: string | null = null;

  contentAvailable: boolean = false;

  constructor() {
    this.checkContent();
  }

  checkContent(): void {
    this.rampsContent = 'AddressToRampsContentOnDatabase';
    this.ledgesContent = null;
    this.stairsContent = 'AddressToStairsContentOnDatabase';
    this.railsContent = null;
    this.banksContent = 'AddressToBanksContentOnDatabase';
    this.otherContent = null;

    if (
      this.rampsContent ||
      this.ledgesContent ||
      this.stairsContent ||
      this.railsContent ||
      this.banksContent ||
      this.otherContent
    ) {
      this.contentAvailable = true;
    }
  }
}
