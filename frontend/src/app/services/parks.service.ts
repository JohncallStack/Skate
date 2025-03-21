import { ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skatepark } from '../models/skatepark.model';

@Injectable({
  providedIn: 'root'
})
export class ParksService {

  // ReplaySubject is used to store and emit the most recent value to all subscribers.
  // The argument (1) means it will buffer one value.
public parks = new ReplaySubject<any>(1);

  // Fetch all parks from the backend API when the service is initialized.
  // Subscribe to the HTTP GET request and emit the result through the `parks` ReplaySubject.
  constructor(private httpClient: HttpClient) {
    this.httpClient.get('/api/v1/parks').subscribe(res => {
      this.parks.next(res)
    })
   }

  //getParks from the backend
  public getParks() {
    return this.httpClient.get<Skatepark[]>('/api/v1/parks');
  }

  //getParks from the backend by id
  public getParkById(id: string) {
    return this.httpClient.get<Skatepark>(`/api/v1/parks/${id}`);
  }

  //postPark to the backend
  public postPark(body: Skatepark) {
    return this.httpClient.post('/api/v1/parks', body);
  }
}
