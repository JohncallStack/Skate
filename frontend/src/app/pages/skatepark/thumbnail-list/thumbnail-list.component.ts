import { ParkInfoService } from './../../../services/park-info.service';
import { Component, inject } from '@angular/core';
import { ThumbnailComponent } from '../thumbnail/thumbnail.component';
import { ParkImageType } from '../../../models/image.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-thumbnail-list',
  standalone: true,
  imports: [ThumbnailComponent, CommonModule],
  templateUrl: './thumbnail-list.component.html',
  styleUrl: './thumbnail-list.component.scss'
})
export class ThumbnailListComponent {

  skateparkThumbnails: ThumbnailComponent[] = [];

  parkinfo = inject(ParkInfoService);


  constructor(){

    const ennisMainImage = {
      type: ParkImageType.MAIN_IMAGE,
      imageID: 'assets/ennis_main_image.JPG',
      description: 'Main image of Ennis Skatepark'
    };

    const shannonPumpTrackMainImage = {
      type: ParkImageType.MAIN_IMAGE,
      imageID: 'assets/shannonpumptrack_main_image.JPG',
      description: 'Main image of Shannon PumpTrack'
    };

    const shannonSkateparkMainImage = {
      type: ParkImageType.MAIN_IMAGE,
      imageID: 'assets/shannonskatepark_main_image.JPG',
      description: 'Main image of Shannon Skatepark'
    };

    this.skateparkThumbnails.push(
      {name:'Ennis Skatepark', mainImage: ennisMainImage, park_id:'c82f35d7-6227-40b5-aa77-3fd424781ae0'},
      {name:'Shannon Pump Track', mainImage: shannonPumpTrackMainImage, park_id:'d7b5fa8c-9337-4053-8aa7-03986be8ea77'},
      {name:'Shannon Skatepark', mainImage: shannonSkateparkMainImage, park_id:'b1b14622-3b4e-4977-80df-1dd1ccdc4fba'});

      this.parkinfo.setParkData(this.skateparkThumbnails);
  }

}
