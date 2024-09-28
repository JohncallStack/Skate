import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { TitleImageComponent } from "../title-image/title-image.component";
import { ParkTabsComponent } from "../park-tabs/park-tabs.component";
import { PhotosTabComponent } from "../park-tabs/photos-tab/photos-tab.component";

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, TitleImageComponent, ParkTabsComponent, PhotosTabComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {

}
