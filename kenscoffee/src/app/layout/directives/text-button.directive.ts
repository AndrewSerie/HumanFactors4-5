import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
	selector: '[appLayoutTextButton]'
})
export class TextButtonDirective implements OnInit {
	@Input() routerLink: string;
	@Input() active: string;

	constructor(private el: ElementRef, private router: Router) {
		el.nativeElement.style.cursor = 'pointer';
		el.nativeElement.style.margin = '0 0 0 60px';
		el.nativeElement.style.fontSize = '17px';
		el.nativeElement.style.outline = '0';

		this.router.events.subscribe(() => this.updateLinkColor());
	}

	ngOnInit() {
		this.updateLinkColor();
	}

	private updateLinkColor() {
		const isActive = this.router.url.includes(this.routerLink);
		this.el.nativeElement.style.color = isActive ? '#3880ff' : '#707070';
	}
}
