import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[ButtonBackground]'
})
export class ButtonBackgroundDirective implements OnInit{

  @Input() btnDefaultColor = 'linear-gradient(90deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)';
  @Input() btnFocusColor = '0 5px 9px 1px rgba(130, 19, 40, 0.5)';

  constructor(private el: ElementRef,
              private rend: Renderer2) { }

  @HostListener('mouseenter')
  onFocus(): void {
    this.rend.setStyle(this.el.nativeElement, 'box-shadow', this.btnFocusColor);
  }
  @HostListener('mouseleave')
  onBlur(): void {
    this.rend.setStyle(this.el.nativeElement, 'box-shadow', '');
  }

  ngOnInit() {
    this.rend.setStyle(this.el.nativeElement, 'background', this.btnDefaultColor);
  }


}
