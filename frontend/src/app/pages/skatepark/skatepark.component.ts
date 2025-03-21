import { Component, OnInit } from '@angular/core';
import { ParkTabsComponent } from './park-tabs/park-tabs.component';
import { TitleImageComponent } from '../../reusable_components/title-image/title-image.component';
import { Skatepark } from '../../models/skatepark.model';
import { ActivatedRoute } from '@angular/router';
import { ParksService } from '../../services/parks.service';
import { MiddleImageComponent } from "../../reusable_components/middle-image/middle-image.component";

@Component({
  selector: 'app-skatepark',
  standalone: true,
  imports: [ParkTabsComponent, TitleImageComponent, MiddleImageComponent],
  templateUrl: './skatepark.component.html',
  styleUrl: './skatepark.component.scss',
})
export class SkateparkComponent implements OnInit {
  skatepark?: Skatepark;

  // Constructor to inject dependencies
  constructor(
    private route: ActivatedRoute,
    private parksService: ParksService //Service that fetches skatepark data
  ) {}

  // Lifecycle hook executed when the component initializes
  ngOnInit(): void {
    console.log(this.skatepark);
    this.route.params.subscribe(params => {
        const park_id = params['park_id']; // Extract the 'park_id' from the route parameters
        if (park_id) {
            this.parksService.parks.subscribe( // Fetch the list of parks from the service
                (parks:Skatepark[]) => { // Find the skatepark with the matching park_id
                    this.skatepark = parks.find((park) => park.park_id === park_id);
                    console.log('Skatepark:', this.skatepark); // Log the found skatepark
                },
                (error) => {
                    console.error('Error fetching parks', error);
                }
            );
        }
    });
}

}