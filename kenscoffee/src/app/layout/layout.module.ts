import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TileComponent } from './tile/tile.component';
import { TextButtonDirective } from './directives/text-button.directive';
import { OrderCostTileComponent } from './order-cost-tile/order-cost-tile.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { DiscountPopoverComponent } from './discount-popover/discount-popover.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [IonicModule, CommonModule, FormsModule],
	declarations: [
		TileComponent,
		TextButtonDirective,
		OrderCostTileComponent,
		CartItemComponent,
		DiscountPopoverComponent
	],
	exports: [
		TileComponent,
		TextButtonDirective,
		OrderCostTileComponent,
		CartItemComponent
	],
	entryComponents: [DiscountPopoverComponent]
})
export class LayoutModule {}
