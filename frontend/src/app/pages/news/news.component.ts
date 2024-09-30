import { Component } from '@angular/core';
import { FooterComponent } from "../../reusable_components/footer/footer.component";
import { NavbarComponent } from "../../reusable_components/navbar/navbar.component";
import { TitleImageComponent } from "../../reusable_components/title-image/title-image.component";
import { ParkTabsComponent } from "../skatepark/park-tabs/park-tabs.component";
import { PhotosTabComponent } from "../skatepark/park-tabs/photos-tab/photos-tab.component";

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, TitleImageComponent, ParkTabsComponent, PhotosTabComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {

}
