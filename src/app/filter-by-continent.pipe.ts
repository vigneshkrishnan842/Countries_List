import { Pipe, PipeTransform } from '@angular/core';
import { Country_List } from 'src/common/dataService.service';

@Pipe({
  name: 'filterByContinent'
})
export class FilterByContinentPipe implements PipeTransform {

  transform(countries_list: Country_List[], searchFilter: string): Country_List[] {
    if (searchFilter !== 'all' && searchFilter !== '') {
      return countries_list.filter(country => country.continents[0] === searchFilter);
    }
    return countries_list;
  }

}
