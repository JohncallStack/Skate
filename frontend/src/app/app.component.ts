import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./reusable_components/navbar/navbar.component";
import { TitleImageComponent } from "./reusable_components/title-image/title-image.component";
import { AboutComponent } from "./pages/home/about/about.component";
import { FooterComponent } from "./reusable_components/footer/footer.component";
import {GoogleMapsModule} from '@angular/google-maps';
// import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule here


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, TitleImageComponent, AboutComponent, FooterComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'skate';
}
