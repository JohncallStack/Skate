import { Image } from './image.model';

export class SkateparkThumbnail{
    name!: string;
    mainImage!: Image;
    park_id?: string;
    
    constructor(name: string, mainImage: Image, park_id?: string){
        this.name = name;
        this.mainImage = mainImage;
        this.park_id = park_id;
    }
}