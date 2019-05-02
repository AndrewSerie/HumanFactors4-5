import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
	selector: 'app-discount-popover',
	templateUrl: './discount-popover.component.html',
	styleUrls: ['./discount-popover.component.scss']
})
export class DiscountPopoverComponent implements OnInit {
	discount = 0;
	discountDisplay = 0;
	dollar = 0;
	subtotal = 0;

	constructor(
		private popoverController: PopoverController,
		private navParams: NavParams
	) {}

	ngOnInit() {
		this.subtotal = this.navParams.get('subtotal');
		this.dollar = this.navParams.get('discount');
		this.dollarChange();
	}

	dismiss() {
		this.popoverController.dismiss(this.dollar);
	}

	percentChange() {
		if (this.discountDisplay < 0) {
			this.discountDisplay = 0;
			this.discount = 0;
			this.dollar = 0;
		} else if (this.discountDisplay > 100) {
			this.discountDisplay = 100;
			this.discount = 100;
			this.dollar = this.subtotal;
		} else {
			this.discount = this.discountDisplay;
			this.dollar = Math.round(this.subtotal * this.discount) / 100;
		}
	}

	dollarChange() {
		if (this.dollar < 0) {
			this.dollar = 0;
			this.discountDisplay = 0;
			this.discount = 0;
		} else if (this.dollar > this.subtotal) {
			this.dollar = this.subtotal;
			this.discountDisplay = 100;
			this.discount = 100;
		} else {
			this.discount = (this.dollar / this.subtotal) * 100;
			this.discountDisplay = Math.round(this.discount);
		}
	}
}
