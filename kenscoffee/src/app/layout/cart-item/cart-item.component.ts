import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItem, CartService } from 'src/app/services/cart.service';
import { AlertController } from '@ionic/angular';

@Component({
	selector: 'app-cart-item',
	templateUrl: './cart-item.component.html',
	styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
	@Input() item: CartItem;
	@Output() itemChange = new EventEmitter();

	constructor(
		private cartService: CartService,
		private alertController: AlertController
	) {}

	delete() {
		this.cartService.removeItem(this.item);
	}

	addQuantity() {
		this.item.quantity += 1;
		this.itemChange.emit(this.item);
	}

	subtractQuantity() {
		if (this.item.quantity <= 1) return;
		this.item.quantity -= 1;
		this.itemChange.emit(this.item);
	}

	async toggleInfo() {
		const alert = await this.alertController.create({
			header: this.item.name,
			message: this.item.description,
			buttons: ['Ok']
		});

		await alert.present();
	}
}
