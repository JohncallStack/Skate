import { Image } from './image.model';

export class Skatepark {
  name!: string;
  park_id?: string;
  address?: string;
  lat!: number;
  long!: number;
  surfaceType?: string;
  description?: string;
  mainImage!: Image;
  images?: Image[];
  parking?: string;
  website?: string;
  googleMapsLink?: string;

  constructor(
    name: string,
    lat: number,
    long: number,
    mainImage: Image,
    address?: string,
    park_id?: string,
    surfaceType?: string,
    description?: string,
    images?: Image[],
    parking?: string,
    website?: string,
    googleMapsLink?: string
    
  ) {
    this.name = name;
    this.park_id = park_id;
    this.address = address;
    this.lat = lat;
    this.long = long;
    this.surfaceType = surfaceType;
    this.description = description;
    this.mainImage = mainImage;
    this.images = images;
    this.parking = parking;
    this.website = website;
    this.googleMapsLink = googleMapsLink;
  }
}

