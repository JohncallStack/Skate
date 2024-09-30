import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skatepark } from '../models/skatepark.model';

@Injectable({
  providedIn: 'root'
})
export class ParksService {

  constructor(private httpClient: HttpClient) { }

  public getParks() {
    return this.httpClient.get<Skatepark[]>('/api/v1/parks');
  }

  public getParkById(id: string) {
    return this.httpClient.get<Skatepark>(`/api/v1/parks/${id}`);
  }

  public postPark(body: Skatepark) {
    return this.httpClient.post('/api/v1/parks', body);
  }
}
