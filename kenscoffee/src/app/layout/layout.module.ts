import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TileComponent } from './tile/tile.component';
import { TextButtonDirective } from './directives/text-button.directive';
import { OrderCostTileComponent } from './order-cost-tile/order-cost-tile.component';

@NgModule({
	imports: [IonicModule, CommonModule],
	declarations: [TileComponent, TextButtonDirective, OrderCostTileComponent],
	exports: [TileComponent, TextButtonDirective, OrderCostTileComponent]
})
export class LayoutModule {}
