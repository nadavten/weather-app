import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filter, RootObject } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private appID = '0784e3e82a23b2c49407faa07552717d';
  private url = 'https://api.openweathermap.org/data/2.5/box/city?bbox';//12,32,15,37,10&appid=${this.appID}`;

  constructor(private httpClient:HttpClient){}

  getWeather(filter:Filter){
    const url = `${this.url}=${filter.lonLeft},${filter.latBottom},${filter.lonRight},${filter.latTop},${filter.zoom}&appid=${this.appID}`;
    return this.httpClient.get<RootObject>(url);
  }
}
