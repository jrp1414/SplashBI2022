import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterText: string): any[] {
    if (filterText.length > 1) {
      return value.filter(v => (v.title as string).toLowerCase().indexOf(filterText.toLowerCase()) != -1);
    }
    return value;
  }

}
