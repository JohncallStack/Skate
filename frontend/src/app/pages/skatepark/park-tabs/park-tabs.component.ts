import { Component, Input } from '@angular/core';
import { DetailsTabComponent } from "./details-tab/details-tab.component";
import { PhotosTabComponent } from "./photos-tab/photos-tab.component";
import { ObstaclesTabComponent } from "./obstacles-tab/obstacles-tab.component";
import { WeatherTabComponent } from "./weather-tab/weather-tab.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SocialsTabComponent } from "./socials-tab/socials-tab.component";
import { Skatepark } from '../../../models/skatepark.model';

@Component({
  selector: 'app-park-tabs',
  standalone: true,
  imports: [DetailsTabComponent, PhotosTabComponent, ObstaclesTabComponent, WeatherTabComponent, HttpClientModule, SocialsTabComponent],
  templateUrl: './park-tabs.component.html',
  styleUrl: './park-tabs.component.scss'
})
export class ParkTabsComponent {
  @Input() park?: Skatepark;

ngOnChanges(){
  console.log('Park-tabs Data', this.park);
}

}
