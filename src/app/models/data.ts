export interface RootObject {
  cod: string;
  calctime: number;
  cnt: number;
  list: Station[];
}

export interface Station {
  id: number;
  name: string;
  coord: Coord;
  main: Details;
  dt: number;
  wind: Wind;
  rain?: Rain;
  clouds: Clouds;
  weather: Weather[];
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Clouds {
  all: number;
}

interface Rain {
  "3h": number;
}

interface Wind {
  speed: number;
  deg: number;
  var_beg?: number;
  var_end?: number;
}

interface Details {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level?: number;
  grnd_level?: number;
  humidity: number;
}

interface Coord {
  lon: number;
  lat: number;
}

export interface Filter{
  lonLeft:number;
  latBottom:number;
  lonRight:number;
  latTop:number;
  zoom:number;
}

export interface StationValue {
  id: number;
  value: number;
}