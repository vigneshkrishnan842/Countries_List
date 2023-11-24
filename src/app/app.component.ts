import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/common/dataService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'country-project';
  countriesListReady : boolean = false;
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.dataService.getAllCountries();
    this.dataService.countriesDataReady.subscribe((data) => {
      console.log(data);
      this.countriesListReady = data;
    });
  }
}