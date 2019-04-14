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
		this._cart.next(cart);
	}

	removeItem(item: CartItem) {
		this.cart.items = this.cart.items.filter(i => i !== item);
	}

	addItem(item: CartItem) {
		this.cart.items = [...this.cart.items, item];
	}

	updateDiscount(discont: number) {
		this.cart.discount = discont;
	}
}

export class Cart {
	constructor() {
		this.items = [];
	}

	items: CartItem[];
	discount: number;
	// Tax is calculated at runtime to prevent staleness
	// Subtotal and Total are calculated at runtime to prevent staleness
}

export class CartItem {
	name: string;
	addons?: Addon[];
	quantity?: number;
	unitPrice?: number;
	notes?: string;
}
