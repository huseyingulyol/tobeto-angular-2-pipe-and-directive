import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})

export class HighlightDirective {

  @Input() stock! : number;
  @Input() discontinued! : boolean;

  constructor(private el: ElementRef) { 
  }

  ngOnInit()
  {
    if (!(this.stock > 0))
      {
        this.el.nativeElement.style.backgroundColor = '#fcd2d2';
      }
  }

  
}
