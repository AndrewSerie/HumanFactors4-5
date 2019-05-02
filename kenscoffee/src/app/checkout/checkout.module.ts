import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { NgModule } from '@angular/core';
import { CreditComponent } from './credit/credit.component';
import { CashComponent } from './cash/cash.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
	imports: [IonicModule, CommonModule, RouterModule, FontAwesomeModule],
	declarations: [CheckoutComponent, CreditComponent, CashComponent]
})
export class CheckoutModule {}
