import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService, Cart } from '../services/cart.service';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
	cart: Cart;

	constructor(private router: Router, private cartService: CartService) {}

	ngOnInit() {
		this.cart = this.cartService.cart;
	}

	discardOrder() {
		this.cartService.discard();
		this.router.navigate(['home', 'bagels']);
	}
}
