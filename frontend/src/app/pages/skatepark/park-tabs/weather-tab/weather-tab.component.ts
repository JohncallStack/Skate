import { ParksService } from './../../../../services/parks.service';
import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from './weather.service'; 
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { Skatepark } from '../../../../models/skatepark.model';


@Component({
  selector: 'app-weather-tab',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Add HttpClientModule to the imports array
  templateUrl: './weather-tab.component.html',
  styleUrl: './weather-tab.component.scss'
})
export class WeatherTabComponent implements OnInit{

  @Input() park?: Skatepark | null;
  weatherData: any;
  errorMessage: string = '';

  constructor(private weatherService: WeatherService, private parksService: ParksService
    ) {}

  ngOnInit(){
    console.log('Park object:', this.park); // Debugging line
    if (this.park && this.park.city){
      this.getWeather(this.park.city);      
    }

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


    //       this.route.params.subscribe(params => {
    //         const park_id = params['park_id'];
    //         if(park_id){
    //           this.parksService.getParkById(park_id).subscribe((park: Skatepark | null) => {
    //             this.skatepark = park;
    //     });
    //   }
    // });