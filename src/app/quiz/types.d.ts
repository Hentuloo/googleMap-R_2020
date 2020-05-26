export interface Country {
  countryName: string;
  citiesId: number;
}
export interface Countries {
  [key: string]: Country;
}
export interface Place {
  name: string;
  points: number;
}
export interface City {
  name: string;
  lat: number;
  lng: number;
  places: Place[];
}
export interface Cities {
  [key: number]: {
    countryName: string;
    cities: City[];
  };
}
