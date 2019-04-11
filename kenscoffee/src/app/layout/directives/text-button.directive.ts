import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector: '[appLayoutTextButton]'
})
export class TextButtonDirective {
	constructor(el: ElementRef) {
		el.nativeElement.style.cursor = 'pointer';
		el.nativeElement.style.margin = '0 0 0 60px';
		el.nativeElement.style.color = '#3880ff';
		el.nativeElement.style.fontSize = '17px';
	}
}
