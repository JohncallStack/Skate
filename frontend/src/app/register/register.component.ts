import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { TitleImageComponent } from "../title-image/title-image.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, TitleImageComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
