import { Component } from '@angular/core';
import { FooterComponent } from "../../reusable_components/footer/footer.component";
import { NavbarComponent } from "../../reusable_components/navbar/navbar.component";
import { TitleImageComponent } from "../../reusable_components/title-image/title-image.component";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, TitleImageComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

}
