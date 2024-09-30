export class Image{
    type!: ParkImageType;
    imageID!: string;
    description?: string;
}

export enum ParkImageType{
    MAIN_IMAGE = 'mainImage',
    PARK_IMAGE = 'parkImage',
    RAMPS = 'ramps',
    BOWLS = 'bowls',
    LEDGES = 'ledges',
    RAILS = 'rails',
    BANKS = 'banks',
    STAIRS = 'stairs',
    OTHER = 'other'
}