import { Component, OnInit } from '@angular/core';
import { CartService, Cart } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	cart: Cart;

	constructor(private cartService: CartService, private router: Router) {}

	ngOnInit() {
		this.cartService.cart$.subscribe(c => (this.cart = c));
	}

	discardOrder() {
		this.cartService.discard();
	}

	updateCart() {
		this.cartService.cart = this.cart;
	}

	navCash() {
		this.cartService.cart = this.cart;
		this.router.navigate(['checkout', 'cash']);
	}

	navCredit() {
		this.cartService.cart = this.cart;
		this.router.navigate(['checkout', 'credit']);
	}
}
