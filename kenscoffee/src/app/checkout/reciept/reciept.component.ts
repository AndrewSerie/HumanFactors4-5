import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
	selector: 'app-reciept',
	templateUrl: './reciept.component.html',
	styleUrls: ['./reciept.component.scss']
})
export class RecieptComponent {
	reciept = '';

	constructor(
		private router: Router,
		private cartService: CartService,
		private toastService: ToastService
	) {}

	ionViewWillEnter() {
		this.reciept = '';
	}

	ionViewDidLeave() {
		this.reciept = '';
	}

	done() {
		this.toastService.presentSuccessBottom(
			'Your order was successfully placed'
		);
		this.cartService.discard();
		this.router.navigate(['home', 'bagels']);
	}
}
