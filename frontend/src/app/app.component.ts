import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './reusable_components/navbar/navbar.component';
import { FooterComponent } from './reusable_components/footer/footer.component';
import { ParksService } from './services/parks.service';
import { ImagekitioAngularModule } from 'imagekitio-angular';
import { NgOptimizedImage } from '@angular/common';
import { BottomSpacerComponent } from "./pages/home/bottom-spacer/bottom-spacer.component";

// import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule here

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    NgOptimizedImage,
    ImagekitioAngularModule,
    BottomSpacerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'skate';

  //Ensures that the parks are fetched from the backend API when the app is initialized.
  constructor(private parksService: ParksService) {}
  
}
