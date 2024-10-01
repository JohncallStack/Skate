import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThumbnailComponent } from '../pages/skatepark/thumbnail/thumbnail.component';


@Injectable({
  providedIn: 'root'
})
export class ParkInfoService {

  private parkDataSource = new BehaviorSubject<ThumbnailComponent[] | null>(null);
  parkData$ = this.parkDataSource.asObservable();

  setParkData(parkData: ThumbnailComponent[]) {
    this.parkDataSource.next(parkData);
  }
}
