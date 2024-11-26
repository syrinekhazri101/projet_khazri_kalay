import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unite',
  standalone: true
})
export class UnitePipe implements PipeTransform {

  transform(value: number | string): string {
    if (value == null || value === '') {
      return '';
    }

    return `${value} DT`;
  }

}
