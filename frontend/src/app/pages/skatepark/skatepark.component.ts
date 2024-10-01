import { Component, OnInit } from '@angular/core';
import { ParkTabsComponent } from './park-tabs/park-tabs.component';
import { TitleImageComponent } from '../../reusable_components/title-image/title-image.component';
import { Skatepark } from '../../models/skatepark.model';
import { ActivatedRoute } from '@angular/router';
import { ParksService } from '../../services/parks.service';

@Component({
  selector: 'app-skatepark',
  standalone: true,
  imports: [ParkTabsComponent, TitleImageComponent],
  templateUrl: './skatepark.component.html',
  styleUrl: './skatepark.component.scss',
})
export class SkateparkComponent implements OnInit {
  skatepark?: Skatepark;

  constructor(
    private route: ActivatedRoute,
    private parksService: ParksService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        const park_id = params['park_id'];
        if (park_id) {
            this.parksService.getParks().subscribe(
                (parks) => {
                    this.skatepark = parks.find((park) => park.park_id === park_id);
                    console.log('Skatepark:', this.skatepark);
                },
                (error) => {
                    console.error('Error fetching parks', error);
                }
            );
        }
    });
}

}
