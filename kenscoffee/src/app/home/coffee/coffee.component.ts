import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MockDataService } from 'src/app/services/mock-data.service';
import { CartService } from 'src/app/services/cart.service';
import { Item } from 'src/app/models/item';

@Component({
	selector: 'app-coffee',
	templateUrl: './coffee.component.html',
	styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit {
	@Output() itemSelected = new EventEmitter();
	items: Item[];

	constructor(private service: MockDataService, private cart: CartService) {}

	ngOnInit() {
		this.service.getCoffeeItems().subscribe(i => (this.items = i));
	}

	selected(item: Item) {
		if (!item.inStock) return;

		this.cart.addItem({
			name: `Coffee - ${item.name}`,
			unitPrice: item.unitPrice,
			description: item.description,
			quantity: 1,
			notes: '',
			addons: []
		});
		this.itemSelected.emit();
	}
}
