import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(cars: any[], value: any) {
    return cars.filter((car:any) => car.name.toLowerCase().includes(value.toLowerCase()))
  }

}
