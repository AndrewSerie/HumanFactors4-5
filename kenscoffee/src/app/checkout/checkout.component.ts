import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService, Cart } from '../services/cart.service';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
	cart: Cart;
	auxRoute = 'cash';

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private cartService: CartService
	) {}

	ngOnInit() {
		this.route.paramMap.subscribe(p => (this.auxRoute = p.get('aux')));
		this.cart = this.cartService.cart;
	}

	discardOrder() {
		this.cartService.discard();
		this.router.navigate(['home', 'bagels']);
	}
}
