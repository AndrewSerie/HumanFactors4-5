import { Component, OnInit } from '@angular/core';
import {
	faMoneyBillWave,
	faBackspace
} from '@fortawesome/free-solid-svg-icons';
import { Cart, CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-cash',
	templateUrl: './cash.component.html',
	styleUrls: ['./cash.component.scss']
})
export class CashComponent implements OnInit {
	cart: Cart;
	cashTendered = 0;
	cashed = false;
	faMoneyBillWave = faMoneyBillWave;
	faBackspace = faBackspace;

	constructor(private cartService: CartService, private router: Router) {}

	ngOnInit() {
		this.cart = this.cartService.cart;
	}

	ionViewWillEnter() {
		this.clear();
	}

	ionViewDidLeave() {
		this.clear();
	}

	cash() {
		if (this.cashTendered < this.cart.total) return;
		this.cashed = true;
	}

	clear() {
		this.cashed = false;
		this.cashTendered = 0;
	}

	addTendered(amount: number) {
		this.cashTendered = this.cashTendered * 10 + amount * 0.01;
	}

	addTenderedShiftLeft() {
		this.cashTendered = this.cashTendered * 100;
	}

	backspaceTendered() {
		this.cashTendered = this.cashTendered * 0.1;
		this.cashTendered = Math.floor(this.cashTendered * 100) / 100;
	}

	setTendered(amount: number) {
		this.cashTendered = amount;
	}
}
