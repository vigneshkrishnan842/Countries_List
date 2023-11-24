import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterByNamePipe } from './filter-by-name.pipe';
import {FormsModule} from '@angular/forms';
import { FilterByContinentPipe } from './filter-by-continent.pipe';
import { CountryListComponent } from './country-list/country-list.component';
import { SpinnerComponent } from '../common/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterByNamePipe,
    FilterByContinentPipe,
    CountryListComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
