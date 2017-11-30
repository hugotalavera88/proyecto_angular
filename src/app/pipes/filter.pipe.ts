import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(array: any[], term): any {
    if(array && term){
      return array.filter(item => {
        var found = false;
        Object.keys(item).forEach(function(key,index) {
          if(item[key].toString().toLowerCase().indexOf(term.toLowerCase()) !== -1){
            found = true;
          }
        });
        return found;
      })
    }else{
      return array;
    }
  }
}

@Pipe({
  name: 'sort'
})
export class SortPipe {
  transform(array: Array<string>, args: string): Array<string> {
    if (array && args){
      array.sort((a: any, b: any) => {
        if (a[args] > b[args]) {
          return 1;
        }
        if (a[args] < b[args]) {
          return -1;
        }
        return 0;
      });
      return array;
    }
  }
}
