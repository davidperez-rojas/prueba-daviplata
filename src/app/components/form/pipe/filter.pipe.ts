import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: string, citys: any): any {
    const data: any = [];
    citys?.find((city: any) => {
      if (city.toLowerCase().includes(value) || city.includes(value)) {
        data?.push(city);
      }
    });
    return data;
  }

}
