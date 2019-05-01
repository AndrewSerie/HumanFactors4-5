import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService, Cart } from 'src/app/services/cart.service';
import { PopoverController } from '@ionic/angular';
import { DiscountPopoverComponent } from '../discount-popover/discount-popover.component';

@Component({
	selector: 'app-layout-order-cost-tile',
	templateUrl: './order-cost-tile.component.html',
	styleUrls: ['./order-cost-tile.component.scss']
})
export class OrderCostTileComponent implements OnInit {
	@Output() cashClicked = new EventEmitter();
	@Output() creditClicked = new EventEmitter();
	cart: Cart;

	constructor(
		private cartService: CartService,
		private popoverController: PopoverController
	) {}

	ngOnInit() {
		this.cartService.cart$.subscribe(c => (this.cart = c));
	}

	updateDiscount(discount: number) {
		this.cartService.updateDiscount(discount);
	}

	async presentDiscountPopover(event: any) {
		const popover = await this.popoverController.create({
			component: DiscountPopoverComponent,
			event: event,
			translucent: false,
			backdropDismiss: false,
			componentProps: {
				discount: this.cart.discount,
				subtotal: this.cart.subtotal
			}
		});
		popover.present();
		popover
			.onDidDismiss()
			.then(data => this.cartService.updateDiscount(data.data));
	}
}
