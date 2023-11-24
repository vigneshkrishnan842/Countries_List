import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService, Country_List } from 'src/common/dataService.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit{
  countryName = '';
  countries_list: Country_List[] = [];
  continents: { [key: string]: boolean } = {};
  selectedContinent = '';
  countryListReady = false;
  constructor(private http: HttpClient, private dataService: DataService, private router:Router) {}
  ngOnInit(): void {
    this.dataService.dataSubject$.subscribe((countriesData) => {
      this.countries_list = <Country_List[]> countriesData;
      for (let country of this.countries_list) {
        if (!this.continents[country.continents[0]]) {
          this.continents[country.continents[0]] = true;
        }
      }
      this.countryListReady = true;
      this.dataService.countriesDataReady.next(true);
    });
  }
  
  navigateToDetail(index:number) {
    this.router.navigate(['/detail',index]);
  }

}
