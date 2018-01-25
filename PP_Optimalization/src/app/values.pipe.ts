import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'values'
})
export class ValuesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      let keys = [];
      for (let key in value) {
          keys.push({ key: key, value: value[key] });
      }
      console.log(keys);
      console.log(value);
      return keys;
  }

}
