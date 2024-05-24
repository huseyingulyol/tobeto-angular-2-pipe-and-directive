import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-translate',
  standalone: true,
  imports: [
    CommonModule,TranslatePipe
  ],
  templateUrl: `./translate.component.html`,
  styleUrl: './translate.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class TranslateComponent {

  toLanguage : any;
  
  onSelect(event : Event)
  {
    this.toLanguage = (event.target as HTMLSelectElement).value;
  }
}
