import { Pipe, PipeTransform } from '@angular/core';
import { Country_List } from 'src/common/dataService.service';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(countries_list: Country_List [],searchFilter : string): Country_List [] {
    
    return countries_list.filter((country) => 
      country.name.official.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1
    );
  }

}
