import { Component } from '@angular/core';
import { TitleImageComponent } from "../title-image/title-image.component";
import { MapComponent } from "../map/map.component";
import { AboutComponent } from "../about/about.component";
import { CustomMapComponent } from "../custom-map/custom-map.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitleImageComponent, MapComponent, AboutComponent, CustomMapComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
