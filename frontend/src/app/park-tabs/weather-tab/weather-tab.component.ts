import { Component } from '@angular/core';
import { WeatherService } from './weather.service'; 
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { Observable, catchError, tap, throwError } from 'rxjs'; // Import Observable, catchError, tap, throwError

@Component({
  selector: 'app-weather-tab',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Add HttpClientModule to the imports array
  templateUrl: './weather-tab.component.html',
  styleUrl: './weather-tab.component.scss'
})
export class WeatherTabComponent {

  weatherData: any;
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(){
    this.getWeather('Ennis');
  }

  getWeather(city: string) {
    this.weatherService.getWeather(city).subscribe(
      data => {
        this.weatherData = data;
        this.errorMessage = '';
      },
      error => {
        this.errorMessage = 'Could not fetch weather data; please try again later.';
        this.weatherData = null;
      }
    );
  }
  getWeatherEmoji(weatherID: number) {
    switch (true) {
      case (weatherID >= 200 && weatherID < 300):
        return "⛈";
      case (weatherID >= 300 && weatherID < 400):
        return "🌧";
      case (weatherID >= 500 && weatherID < 600):
        return "🌧";
      case (weatherID >= 600 && weatherID < 700):
        return "⛄️";
      case (weatherID >= 700 && weatherID < 800):
        return "😶‍🌫️";
      case (weatherID === 800):
        return "☀️";
      case (weatherID >= 801 && weatherID < 810):
        return "☁️";
      default:
        return "?";
    }

}
}
