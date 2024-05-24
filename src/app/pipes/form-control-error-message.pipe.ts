import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

@Pipe({
  name: 'formControlErrorMessage',
  standalone: true
})
export class FormControlErrorMessagePipe implements PipeTransform {
  transform(control: FormControl): string {
    if (control.errors) {
      
      if (control.errors["required"]) {
        return `This field is required`;
      } 
      else if (control.errors["minlength"]) {
        return `Minimum length is ${control.errors["minlength"].requiredLength}`;
      }
      else if (control.errors["maxlength"]) {
        return `Minimum length is ${control.errors["maxlength"].requiredLength}`;
      }
    }
    return '';
  }
}
