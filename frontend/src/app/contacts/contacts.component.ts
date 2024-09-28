import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { TitleImageComponent } from "../title-image/title-image.component";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, TitleImageComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

}
