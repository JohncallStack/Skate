import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-test-image',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './test-image.component.html',
  styleUrl: './test-image.component.scss'
})
export class TestImageComponent {


}
