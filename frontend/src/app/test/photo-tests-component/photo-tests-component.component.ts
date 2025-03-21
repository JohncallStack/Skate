import { Component, } from '@angular/core';
import { ParallaxCssComponent } from "../parallax-css/parallax-css.component";
import { ImagekitTestsComponent } from "../imagekit-tests/imagekit-tests.component";
import { AboutComponent } from "../../pages/home/about/about.component";
import { ImagekitTests2Component } from "../imagekit-tests2/imagekit-tests2.component";
import { ImagekitTestSetHeightComponent } from '../imagekit-test-set-height/imagekit-test-set-height.component';
import { TestHeight2Component } from "../test-height-2/test-height-2.component";
import { TitleImageParralaxComponent } from "../../reusable_components/title-image-parralax/title-image-parralax.component";
import { ParralaxImageComponent } from "../../reusable_components/bottom-parralax-image/parralax-image.component";
import { MiddleImageComponent } from "../../reusable_components/middle-image/middle-image.component";
import { UploadParkTextComponent } from "../../pages/home/upload-park-text/upload-park-text.component";

@Component({
  selector: 'app-photo-tests-component',
  standalone: true,
  imports: [ParallaxCssComponent, ImagekitTestsComponent, AboutComponent, ImagekitTests2Component, ImagekitTestSetHeightComponent, TestHeight2Component, TitleImageParralaxComponent, ParralaxImageComponent, MiddleImageComponent, UploadParkTextComponent],
  templateUrl: './photo-tests-component.component.html',
  styleUrl: './photo-tests-component.component.scss'
})
export class PhotoTestsComponentComponent {

}
