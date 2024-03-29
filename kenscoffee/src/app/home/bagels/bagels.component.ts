import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MockDataService } from 'src/app/services/mock-data.service';
import { Item } from 'src/app/models/item';
import { CartService } from 'src/app/services/cart.service';

@Component({
	selector: 'app-bagels',
	templateUrl: './bagels.component.html',
	styleUrls: ['./bagels.component.scss']
})
export class BagelsComponent implements OnInit {
	@Output() itemSelected = new EventEmitter();
	items: Item[];
	auxRoute = '';

	constructor(private service: MockDataService, private cart: CartService) {}

	ngOnInit() {
		this.service.getBagelItems().subscribe(i => (this.items = i));
	}

	selected(item: Item) {
		if (!item.inStock) return;

		this.cart.addItem({
			name: `Bagel - ${item.name}`,
			unitPrice: item.unitPrice,
			quantity: 1,
			description: item.description,
			addons: [],
			notes: ''
		});
		this.auxRoute = 'addons';
		this.itemSelected.emit();
	}
}
