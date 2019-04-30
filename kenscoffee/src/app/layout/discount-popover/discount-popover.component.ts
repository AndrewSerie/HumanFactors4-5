import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
	selector: 'app-discount-popover',
	templateUrl: './discount-popover.component.html',
	styleUrls: ['./discount-popover.component.scss']
})
export class DiscountPopoverComponent implements OnInit {
	discountInput: number;
	discount: number;
	subtotal: number;
	type = DiscountType.Currency;
	typeString = '$';

	constructor(
		private popoverController: PopoverController,
		private navParams: NavParams
	) {}

	ngOnInit() {
		this.discount = this.navParams.get('discount');
		this.subtotal = this.navParams.get('subtotal');
		this.discountInput = this.discount;
		this.calculateDiscount();
	}

	calculateDiscount() {
		if (this.discountInput == null || this.discountInput === undefined) {
			this.discount = 0;
			return;
		}

		if (this.type === DiscountType.Currency)
			this.discount = this.discountInput;

		if (this.type === DiscountType.Percent)
			this.discount = this.subtotal * (this.discountInput * 0.01);

		if (this.discount > this.subtotal) this.discount = this.subtotal;
	}

	setTypeCurrency() {
		this.type = DiscountType.Currency;
		this.typeString = '$';
		this.discountInput = Math.round(this.discount * 100) / 100;
		this.calculateDiscount();
	}

	setTypePercent() {
		this.type = DiscountType.Percent;
		this.typeString = '%';
		this.discountInput =
			this.subtotal === 0
				? 0
				: Math.round((this.discount / this.subtotal) * 10000) / 100;
		this.calculateDiscount();
	}

	dismiss() {
		this.popoverController.dismiss(this.discount);
	}
}

enum DiscountType {
	Percent,
	Currency
}
