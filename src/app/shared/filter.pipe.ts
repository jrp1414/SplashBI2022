import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
  // pure:true
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterText: string, ...columnNames: string[]): any[] {
    let filteredList: any[] = [];
    if (filterText.length > 1) {
      // return value.filter(v => (v[columnName] as string).toLowerCase().indexOf(filterText.toLowerCase()) != -1);

      for (const column of columnNames) {
        var temp = value.filter(v => (v[column] as string).toLowerCase().indexOf(filterText.toLowerCase()) != -1);
        filteredList = [...filteredList, ...(value.filter(v => (v[column] as string).toLowerCase().indexOf(filterText.toLowerCase()) != -1))];
      }
      var result = filteredList.reduce((unique, o) => {
        if (!unique.some((obj:any) => obj.title === o.title)) {
          unique.push(o);
        }
        return unique;
      }, []);
      
      return result;
    }
    return value;
  }

}
