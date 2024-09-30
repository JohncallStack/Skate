import { Component, Inject, Input, OnInit } from '@angular/core';
import { ParksService } from '../../../../services/parks.service';
import { ActivatedRoute } from '@angular/router';
import { Skatepark } from '../../../../models/skatepark.model';

@Component({
  selector: 'app-details-tab',
  standalone: true,
  imports: [],
  templateUrl: './details-tab.component.html',
  styleUrl: './details-tab.component.scss',
})
export class DetailsTabComponent {
  
  @Input() park?: Skatepark;
  
  ngOnInit(): void {
  console.log('Park in Details Tab:', this.park);
  }
}
