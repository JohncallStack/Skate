import { Component } from '@angular/core';
import { CustomMapComponent } from "../../reusable_components/custom-map/custom-map.component";
import { ThumbnailListComponent } from "./thumbnail-list/thumbnail-list.component";
import { BottomSpacerComponent } from "../../reusable_components/bottom-spacer/bottom-spacer.component";

@Component({
  selector: 'app-skateparks',
  standalone: true,
  imports: [CustomMapComponent, ThumbnailListComponent, BottomSpacerComponent],
  templateUrl: './skateparks.component.html',
  styleUrl: './skateparks.component.scss'
})
export class SkateparksComponent {

}
