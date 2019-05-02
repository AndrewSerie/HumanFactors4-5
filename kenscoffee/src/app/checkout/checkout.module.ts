import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { NgModule } from '@angular/core';
import { CreditComponent } from './credit/credit.component';
import { CashComponent } from './cash/cash.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecieptComponent } from './reciept/reciept.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignaturePadModule } from 'angular2-signaturepad';
import { TipPopoverComponent } from './tip-popover/tip-popover.component';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		RouterModule,
		FontAwesomeModule,
		FormsModule,
		ReactiveFormsModule,
		SignaturePadModule
	],
	declarations: [
		CheckoutComponent,
		CreditComponent,
		CashComponent,
		RecieptComponent,
		TipPopoverComponent
	],
	entryComponents: [TipPopoverComponent]
})
export class CheckoutModule {}
