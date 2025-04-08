import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { TitleImageParralaxComponent } from '../../reusable_components/title-image-parralax/title-image-parralax.component';
import { MiddleImageComponent } from '../../reusable_components/middle-image/middle-image.component';
import { ParralaxImageComponent } from '../../reusable_components/bottom-parralax-image/parralax-image.component';
import { UploadParkTextComponent } from './upload-park-text/upload-park-text.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { TopSpacerComponent } from "./top-spacer/top-spacer.component";
import { BottomSpacerComponent } from "./bottom-spacer/bottom-spacer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutComponent,
    TitleImageParralaxComponent,
    MiddleImageComponent,
    ParralaxImageComponent,
    UploadParkTextComponent,
    RouterLink,
    RouterLinkActive,
    TopSpacerComponent,
    BottomSpacerComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
