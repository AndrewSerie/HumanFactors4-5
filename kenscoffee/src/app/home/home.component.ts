import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CartService, Cart } from '../services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from '../services/toast.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	@ViewChild('autoscroll') cartWindow: ElementRef;
	cart: Cart;
	auxRoute = 'bagels';

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private cartService: CartService,
		private toastService: ToastService
	) {}

	ngOnInit() {
		this.route.paramMap.subscribe(p => (this.auxRoute = p.get('aux')));
		this.cartService.cart$.subscribe(c => (this.cart = c));
	}

	discardOrder() {
		this.cartService.discard();
	}

	updateCart() {
		this.cartService.cart = this.cart;
	}

	navBagels() {
		this.auxRoute = 'bagels';
	}

	navCoffee() {
		this.auxRoute = 'coffee';
	}

	navCash() {
		this.cartService.cart = this.cart;
		if (this.cart.items.length > 0)
			this.router.navigate(['checkout', 'cash']);
		else this.toastService.presentErrorBottom('The cart is empty');
	}

	navCredit() {
		this.cartService.cart = this.cart;
		if (this.cart.items.length > 0)
			this.router.navigate(['checkout', 'credit']);
		else this.toastService.presentErrorBottom('The cart is empty');
	}

	scrollCart() {
		setTimeout(() => {
			this.cartWindow.nativeElement.scrollTop = this.cartWindow.nativeElement.scrollHeight;
		}, 50);
	}
}
