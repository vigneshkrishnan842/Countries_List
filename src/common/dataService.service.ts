import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";

export interface Country_List {
    area: number;
    continents: string[];
    flags: { png: string; svg: string; };
    population: number;
    name: { official: string };
}

export interface Country_detail{
  'name': { 'official': string };
  'area': number;
  'population': number;
  'capital': string[];
  'continents': string[];
  'region': string;
  'tld': string[];
  'startOfWeek': string;
  'subregion': string;
  'maps': { 'googleMaps': string };
  'flags' : {'png' : string}
}

@Injectable({
    providedIn:'root'
})
    
export class DataService{
  apiUrl = 'https://restcountries.com/v3.1/';
  dataSubject$ = new Observable();
  countriesDataReady = new BehaviorSubject<boolean>(false);
  constructor(public http: HttpClient) {}
  getAllCountries(){
    this.dataSubject$ = this.http.get(this.apiUrl + 'all');
  }
}