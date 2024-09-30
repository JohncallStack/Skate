import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-image',
  standalone: true,
  imports: [],
  templateUrl: './title-image.component.html',
  styleUrl: './title-image.component.scss'
})
export class TitleImageComponent {

  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() image: string = '';

}
