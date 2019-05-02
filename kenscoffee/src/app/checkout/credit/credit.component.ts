import { Component, OnInit, ViewChild } from '@angular/core';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService, Cart } from 'src/app/services/cart.service';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { PopoverController } from '@ionic/angular';
import { TipPopoverComponent } from '../tip-popover/tip-popover.component';

@Component({
	selector: 'app-credit',
	templateUrl: './credit.component.html',
	styleUrls: ['./credit.component.scss']
})
export class CreditComponent implements OnInit {
	@ViewChild(SignaturePad) signaturePad: SignaturePad;
	cart: Cart;
	auxRoute = 'swipe';
	tipPercent = 0;
	faCreditCard = faCreditCard;
	manualForm = this.fb.group({
		card: ['', [Validators.required]],
		cvc: ['', [Validators.required]],
		exp: ['', [Validators.required]]
	});
	signatureOptions = {
		canvasWidth: 450,
		canvasHeight: 200,
		backgroundColor: '#e7e7e7'
	};

	constructor(
		private fb: FormBuilder,
		private cartService: CartService,
		private popoverController: PopoverController
	) {}

	ngOnInit() {
		this.cart = this.cartService.cart;
	}

	ionViewWillEnter() {
		this.reset();
	}

	ionViewDidLeave() {
		this.reset();
	}

	reset() {
		this.auxRoute = 'swipe';
		this.tipPercent = 0;
		this.signaturePad.clear();
	}

	isCustomTip() {
		const tip = this.tipPercent;
		return tip !== 0 && tip !== 0.15 && tip !== 0.2 && tip !== 0.25;
	}

	async customTip() {
		const popover = await this.popoverController.create({
			component: TipPopoverComponent,
			event: null,
			translucent: false,
			backdropDismiss: false,
			componentProps: {
				total: this.cart.total,
				tip: this.tipPercent
			}
		});
		popover.present();
		popover.onDidDismiss().then(data => (this.tipPercent = data.data));
	}
}
