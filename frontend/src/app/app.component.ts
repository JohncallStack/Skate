import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { TitleImageComponent } from "./title-image/title-image.component";
import { MapComponent } from "./map/map.component";
import { AboutComponent } from "./about/about.component";
import { FooterComponent } from "./footer/footer.component";
import {GoogleMapsModule} from '@angular/google-maps';
// import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule here


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, TitleImageComponent, MapComponent, AboutComponent, FooterComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'skate';
}
