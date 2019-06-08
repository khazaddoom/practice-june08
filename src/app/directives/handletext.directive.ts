import {
    Directive,
    Input,
    ElementRef,
    Renderer2,
    OnInit,
    HostBinding,
    HostListener
} from '@angular/core';

@Directive({
    selector: '[appHandleText]'
})
export class HandleTextDirective implements OnInit{

   @Input('innerVal') textValue = '';

   @HostBinding('innerText') someText = this.textValue;

    constructor(elementRef: ElementRef, renderer: Renderer2) { }

    ngOnInit() {
        this.someText = this.textValue;
    }

    @HostListener('mouseover') onMouseOverCustom() {
        console.log(this.textValue)
    }

}
