import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoCharacterInput]',
  standalone: true,
})
export class AppNoCharacterInputDirective { 
  @HostListener('input', ['$event'])
  onInput(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    // Sadece sayı karakterlerini kaldır
    input.value = value.replace(/\d+/g, '');

    // Değişiklikleri bildir
    input.dispatchEvent(new Event('input'));
  }
}
