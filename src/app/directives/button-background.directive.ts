import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[ButtonBackground]'
})
export class ButtonBackgroundDirective implements OnInit{

  constructor(private el: ElementRef,
              private rend: Renderer2) { }

  @HostListener('mouseover')
  onHover() {
    this.el.nativeElement.style.boxShadow = '0 5px 9px 1px rgba(130, 19, 40, 0.5)'
  }
  @HostListener('mouseout')
  onMouseOut() {
    this.el.nativeElement.style.boxShadow = 'none'
  }

  ngOnInit() {
    this.el.nativeElement.style.backgroundImage = 'linear-gradient(90deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)'
  }


}
