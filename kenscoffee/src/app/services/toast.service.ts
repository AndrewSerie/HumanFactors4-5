import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()
export class ToastService {
	constructor(private controller: ToastController) {}

	async presentErrorBottom(message: string, duration = 4000) {
		const toast = await this.controller.create({
			message: message,
			duration: duration,
			position: 'bottom',
			color: 'danger',
			showCloseButton: true,
			closeButtonText: 'dismiss'
		});
		toast.present();
	}

	async presentSuccessBottom(message: string, duration = 4000) {
		const toast = await this.controller.create({
			message: message,
			duration: duration,
			position: 'bottom',
			color: 'success',
			showCloseButton: true,
			closeButtonText: 'dismiss'
		});
		toast.present();
	}

	async presentInfoBottom(message: string, duration = 4000) {
		const toast = await this.controller.create({
			message: message,
			duration: duration,
			position: 'bottom',
			color: 'light',
			showCloseButton: true,
			closeButtonText: 'dismiss'
		});
		toast.present();
		return toast;
	}
}
