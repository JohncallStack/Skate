import { Component, ViewChild } from '@angular/core';
import {
  GoogleMapsModule,
  MapMarker,
  MapInfoWindow,
} from '@angular/google-maps';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-map',
  standalone: true,
  imports: [GoogleMapsModule, CommonModule],
  templateUrl: './custom-map.component.html',
  styleUrl: './custom-map.component.scss',
})
export class CustomMapComponent {
  @ViewChild(MapInfoWindow) infoWindow?: MapInfoWindow;
  infoContent: string | undefined;
  nameContent: string | undefined;

  // selectedMarker: { position: google.maps.LatLngLiteral; title: string } | null = null;
  // map!: google.maps.Map;

  locations = [
    {
      name: 'Ennis Skatepark',
      info: 'URL TO BE ADDED',
      lat: 52.86195663038028,
      lng: -9.002131990802203,
    },
    {
      name: 'Shannon Pump track',
      info: 'URL TO BE ADDED',
      lat: 52.706997024299014,
      lng: -8.8780264288358,
    },
    {
      name: 'Shannon Skatepark',
      info: 'URL TO BE ADDED',
      lat: 52.70533025595204,
      lng: -8.876852206112341,
    },
  ];

  markersArray = this.locations.map((location) => ({
    position: { lat: location.lat, lng: location.lng },
    title: location.name,
    info: location.info, // Make sure this matches the properties in your locations array
  }));

  center: google.maps.LatLngLiteral = {
    lat: 53.381141274610286,
    lng: -7.672379078342976,
  };
  zoom = 6.6;


  // Define markers using locations array
  // markers: { position: google.maps.LatLngLiteral; title: string }[] =
  //   this.locations.map((location) => ({
  //     position: { lat: location.lat, lng: location.lng },
  //     title: location.name,
  //   }));

openInfo(markerElem: MapMarker, content: string, name: string) {
    this.nameContent = name;  
    this.infoContent = content;
    this.infoWindow?.open(markerElem);
  }

  searchLocation(searchTerm: string) {
    const location = this.locations.find((loc) =>
      loc.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (location) {
      this.center = { lat: location.lat, lng: location.lng };
      this.zoom = 15; // Adjust zoom level to focus on the searched location
    } else {
      alert('Location not found');
    }
  }

}
