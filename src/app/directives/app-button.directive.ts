import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class AppButtonDirective {
  @Input() appButton! : string;
  @Input() EnterColor! : string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit()
  {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.appButton);
    this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '10px');
  }
  
  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.el.nativeElement.style.backgroundColor = this.EnterColor;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.el.nativeElement.style.backgroundColor = this.appButton;
  }
  
}
