import { Component } from '@angular/core';
import { FooterComponent } from "../../reusable_components/footer/footer.component";
import { NavbarComponent } from "../../reusable_components/navbar/navbar.component";
import { TitleImageComponent } from "../../reusable_components/title-image/title-image.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, TitleImageComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
