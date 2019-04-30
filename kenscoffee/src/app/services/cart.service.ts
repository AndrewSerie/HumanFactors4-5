import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Addon } from '../models/item';

@Injectable()
export class CartService {
	private readonly _cart = new BehaviorSubject<Cart>(new Cart());
	readonly cart$ = this._cart.asObservable();

	get cart(): Cart {
		return this._cart.getValue();
	}

	set cart(cart: Cart) {
		this.updateCost();
		this._cart.next(cart);
	}

	removeItem(item: CartItem) {
		this.cart.items = this.cart.items.filter(i => i !== item);
		this.updateCost();
	}

	addItem(item: CartItem) {
		this.cart.items = [...this.cart.items, item];
		this.updateCost();
	}

	updateDiscount(discont: number) {
		this.cart.discount = discont;
		this.updateCost();
	}

	discard() {
		this.cart.items.length = 0;
		this.cart.discount = 0;
		this.cart.subtotal = 0;
		this.cart.tax = 0;
		this.cart.total = 0;
	}

	updateCost() {
		this.cart.subtotal = 0;
		this.cart.items.forEach(i => {
			this.cart.subtotal +=
				i.unitPrice * i.quantity +
				i.addons
					.filter(j => j.price)
					.reduce((sum, next) => sum + next.price, 0);
		});

		this.cart.tax = (this.cart.subtotal - this.cart.discount) * 0.065;
		this.cart.total =
			this.cart.subtotal + this.cart.tax - this.cart.discount;
	}
}

export class Cart {
	constructor() {
		this.items = [];
		this.subtotal = 0;
		this.tax = 0;
		this.total = 0;
		this.discount = 0;
	}

	items: CartItem[];
	subtotal: number;
	tax: number;
	total: number;
	discount: number;
}

export class CartItem {
	name: string;
	addons: Addon[];
	quantity: number;
	unitPrice: number;
	notes: string;
	description: string;
}
