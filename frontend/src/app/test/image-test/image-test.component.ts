import { Component } from '@angular/core';
import { jarallax } from 'jarallax';

@Component({
  selector: 'app-image-test',
  standalone: true,
  imports: [],
  templateUrl: './image-test.component.html',
  styleUrl: './image-test.component.scss'
})
export class ImageTestComponent {

ngOninit(){
  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.2,
  }); 
}

}
