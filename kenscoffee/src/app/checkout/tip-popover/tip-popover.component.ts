import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
	selector: 'app-tip-popover',
	templateUrl: './tip-popover.component.html',
	styleUrls: ['./tip-popover.component.scss']
})
export class TipPopoverComponent implements OnInit {
	tip = 0;
	tipDisplay = 0;
	dollar = 0;
	cartTotal = 0;

	constructor(
		private popoverController: PopoverController,
		private navParams: NavParams
	) {}

	ngOnInit() {
		this.cartTotal = this.navParams.get('total');
		this.tip = this.navParams.get('tip') * 100;
		this.tipDisplay = Math.round(this.tip);
		this.dollar = Math.round(this.cartTotal * this.tip) / 100;
	}

	dismiss() {
		this.popoverController.dismiss(this.tip * 0.01);
	}

	percentChange() {
		if (this.tipDisplay < 0) {
			this.tipDisplay = 0;
			this.tip = 0;
			this.dollar = 0;
		} else {
			this.tip = this.tipDisplay;
			this.dollar = Math.round(this.cartTotal * this.tip) / 100;
		}
	}

	dollarChange() {
		if (this.dollar < 0) {
			this.dollar = 0;
			this.tipDisplay = 0;
			this.tip = 0;
		} else {
			this.tip = (this.dollar / this.cartTotal) * 100;
			this.tipDisplay = Math.round(this.tip);
		}
	}
}
