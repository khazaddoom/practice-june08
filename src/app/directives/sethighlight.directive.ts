import { Directive, HostBinding, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appSethighlight]'
})
export class SethighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') innerTextValue: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {

    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');

  }

  @HostListener('mouseover') onMouseOverCustom() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    console.log(this.innerTextValue);
  }

  @HostListener('mouseleave') onMouseOutCustom() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }

  @HostListener('mousedown') onMouseDownCustom() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseup') onMouseUpCustom() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }

}
