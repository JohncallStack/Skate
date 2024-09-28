import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { TitleImageComponent } from "../title-image/title-image.component";
import { MapComponent } from "../map/map.component";
import { CustomMapComponent } from "../custom-map/custom-map.component";

@Component({
  selector: 'app-skateparks',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, TitleImageComponent, MapComponent, CustomMapComponent],
  templateUrl: './skateparks.component.html',
  styleUrl: './skateparks.component.scss'
})
export class SkateparksComponent {

}
