import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { NgModule } from '@angular/core';
import { CreditComponent } from './credit/credit.component';
import { CashComponent } from './cash/cash.component';

const routes: Routes = [
	{
		path: '',
		component: CheckoutComponent,
		children: [
			{ path: 'cash', component: CashComponent },
			{ path: 'credit', component: CreditComponent },
			{ path: '**', redirectTo: 'cash' }
		]
	}
];

@NgModule({
	imports: [IonicModule, CommonModule, RouterModule.forChild(routes)],
	declarations: [CheckoutComponent, CreditComponent, CashComponent]
})
export class CheckoutModule {}
