import { Component, Input, inject} from '@angular/core';
import { Image } from '../../models/image.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parallax-css',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parallax-css.component.html',
  styleUrl: './parallax-css.component.scss'
})
export class ParallaxCssComponent {

  @Input() image: string = '';
  @Input() backgroundImageUrl: string = '';
  
  backgroundImageUrl1: string = 'assets/m_kennett.jpg';
}
