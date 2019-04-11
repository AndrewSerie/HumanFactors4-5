import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-layout-order-cost-tile',
	templateUrl: './order-cost-tile.component.html',
	styleUrls: ['./order-cost-tile.component.scss']
})
export class OrderCostTileComponent implements OnInit {
	@Input() subtotal = 0.0;
	@Input() discount = 0.0;
	@Input() tax = 0.0;
	total = 0.0;

	constructor() {}

	ngOnInit() {}
}
