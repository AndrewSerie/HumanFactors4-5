import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/services/mock-data.service';
import { Addon } from 'src/app/models/item';
import { CartService, CartItem } from 'src/app/services/cart.service';

@Component({
	selector: 'app-addons',
	templateUrl: './addons.component.html',
	styleUrls: ['./addons.component.scss']
})
export class AddonsComponent implements OnInit {
    addons: Addon[];

	constructor(private service: MockDataService, private cart: CartService) {}

	ngOnInit() {
		this.service.getAddonItems().subscribe(i => (this.addons = i));
	}

	selected(addon: Addon){
		if (!addon.inStock) return;

		this.cart.addAddon({
			name: addon.name,
			price: addon.price,
			inStock: addon.inStock
	});
}
    

}