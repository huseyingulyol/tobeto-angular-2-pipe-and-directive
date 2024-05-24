import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkBoxPipe',
  standalone: true
})

export class CheckBoxPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value)
    {
      return "✔️";
    }
    else return "❌"
  }

}
