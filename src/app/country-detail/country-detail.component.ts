import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService, Country_List, Country_detail } from 'src/common/dataService.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit, OnDestroy {
  countriesData: Country_detail[] = [];
  private countriesSub: Subscription = Subscription.EMPTY;
  private paramsSub: Subscription = Subscription.EMPTY;
  selectedCountryIndex = -1;
  selectedCountryDetail :Country_detail = {
    'name': { 'official': '' },
    'area': 0,
    'population': 0,
    'capital': [],
    'continents': [],
    'region': '',
    'tld': [],
    'startOfWeek': '',
    'subregion': '',
    'maps': { 'googleMaps': '' },
    'flags' : {'png' : ''}
  };
  constructor(private dataService : DataService, private route : ActivatedRoute){}
  ngOnInit(): void {
    this.paramsSub = this.route.params.subscribe((params: Params) => {
      this.selectedCountryIndex = params['id'];
    });
     this.countriesSub =this.dataService.dataSubject$.subscribe((countries_data) => {
      this.countriesData = <Country_detail[]>countries_data;
      this.selectedCountryDetail = this.countriesData[this.selectedCountryIndex];
    });
  }
  ngOnDestroy(): void {
    this.countriesSub.unsubscribe();
    if(this.paramsSub)
    this.paramsSub.unsubscribe();
  }
}
