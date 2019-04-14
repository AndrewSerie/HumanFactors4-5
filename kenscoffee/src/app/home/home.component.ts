import { Component, OnInit } from '@angular/core';
import { CartService, Cart } from '../services/cart.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	cart: Cart;

	constructor(private cartService: CartService) {}

	ngOnInit() {
		this.cartService.cart$.subscribe(c => (this.cart = c));
	}

	discardOrder() {
		console.log('Discarding order');
	}
}
