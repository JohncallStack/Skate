import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParksService } from '../services/parks.service';
import {
  FormGroup,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { Skatepark } from '../models/skatepark.model';
import { ParkImageType } from '../models/image.model';

@Component({
  selector: 'app-db-form',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  providers: [ParksService],
  templateUrl: './db-form.component.html',
  styleUrl: './db-form.component.scss',
})
export class DbFormComponent implements OnInit {
  title = 'skate';
  parks = new ReplaySubject<any>();

  newParkForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    lat: new FormControl(''),
    lng: new FormControl(''),
    surfaceType: new FormControl(''),
    description: new FormControl(''),
    mainImage: new FormControl(''),
    parking: new FormControl(''),
    website: new FormControl(''),
  });

  constructor(private parksService: ParksService) {}

  ngOnInit(): void {
    this.parksService.getParks().subscribe((res) => {
      this.parks.next(res);
    });

    this.newParkForm.valueChanges.subscribe((change) => {
      console.log(change);
    });
  }

  public submit() {
    if (this.newParkForm.valid) {
      const newPark: Skatepark = {
        name: this.newParkForm.value.name!,
        address: this.newParkForm.value.address || '',
        lat: parseFloat(this.newParkForm.value.lat!),
        long: parseFloat(this.newParkForm.value.lat!),
        surfaceType: this.newParkForm.value.surfaceType || '',
        description: this.newParkForm.value.description || '',
        mainImage: {
          type: ParkImageType.MAIN_IMAGE,
          imageID: this.newParkForm.value.mainImage!,
        },
        parking: this.newParkForm.value.parking || '',
        website: this.newParkForm.value.website || '',
      };

      this.parksService.postPark(newPark).subscribe(() => {
        this.parksService.getParks().subscribe((res) => {
          this.parks.next(res);
        });
      });
    }else {
      console.log('Invalid form');
    }
  }
}
