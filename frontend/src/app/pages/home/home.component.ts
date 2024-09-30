import { Component } from '@angular/core';
import { TitleImageComponent } from "../../reusable_components/title-image/title-image.component";
import { AboutComponent } from "./about/about.component";
import { CustomMapComponent } from "../../reusable_components/custom-map/custom-map.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitleImageComponent, AboutComponent, CustomMapComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
