import { Component } from '@angular/core';
import { NavbarComponent } from "../../reusable_components/navbar/navbar.component";
import { FooterComponent } from "../../reusable_components/footer/footer.component";
import { TitleImageComponent } from "../../reusable_components/title-image/title-image.component";
import { CustomMapComponent } from "../../reusable_components/custom-map/custom-map.component";
import { ThumbnailListComponent } from "../skatepark/thumbnail-list/thumbnail-list.component";

@Component({
  selector: 'app-skateparks',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, TitleImageComponent, CustomMapComponent, ThumbnailListComponent],
  templateUrl: './skateparks.component.html',
  styleUrl: './skateparks.component.scss'
})
export class SkateparksComponent {

}
