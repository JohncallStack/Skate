import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'e684ea660d9f9c88abdbe4a937202b13';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private httpClient: HttpClient) { }

getWeather(city: string): Observable<any> {
  return this.httpClient.get<any>(`${this.apiUrl}?q=${city}&appid=${this.apiKey}`).pipe(
    tap(data => console.log('Weather Data:', data)), // Log the data
    catchError(error => {
    console.error('Error fetching weather data', error);
    return throwError('Could not fetch weather data; please try again later.');
  }));  
};


}