import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { Addon } from '../models/item';
import { of } from 'rxjs';

@Injectable()
export class MockDataService {
	getBagelItems() {
		return of(this.generateBagelItems());
	}

	getCoffeeItems() {
		return of(this.generateCoffeeItems());
	}

//My changes
	getAddonItems(){
		return of(this.generateAddonItems());
	}

	private generateAddonItems(): Addon[] {
		return [
			{
				name: 'Peanut Butter',
				price: 0.50,
				inStock: true
				
			},
			{
				name: 'Strawberry Jam',
				price: 0.50,
				inStock: true
			},
			{
				name: 'Plain Cream Cheese',
				price: 1.00,
				inStock: true
			},
			{
				name: 'Veggie Cream Cheese',
				price: 1.00,
				inStock: true
			},
			{
				name: 'Raspberry Cream Cheese',
				price: 1.00,
				inStock: true
			},
			{
				name: 'Cinnamon Sugar Cream Cheese',
				price: 1.00,
				inStock: true
			},
			{
				name: 'Untoasted',
				price: 0,
				inStock: true
			},
			{
				name: 'Unsliced',
				price: 0,
				inStock: true
			}
		];
	}
//end here

	private generateBagelItems(): Item[] {
		return [
			{
				name: 'Plain',
				inStock: true,
				unitPrice: 3.00
			},
			{
				name: 'Everything',
				inStock: true,
				unitPrice: 3.00
			},
			{
				name: 'Onion',
				inStock: true,
				unitPrice: 3.00
			},
			{
				name: 'Asiago Cheese',
				inStock: true,
				unitPrice: 3.00
			},
			{
				name: 'Cinnamon Sugar',
				inStock: true,
				unitPrice: 3.00
			},
			{
				name: 'Blueberry',
				inStock: false,
				unitPrice: 3.00
			},
			{
				name: 'Chocolate Chip',
				inStock: true,
				unitPrice: 3.00
			},
			{
				name: 'Cinnamon Raisin',
				inStock: true,
				unitPrice: 3.00				
			},
		];
	}

	private generateCoffeeItems(): Item[] {
		return [
			{
				name: 'Black',
				inStock: true
			}
		];
	}
}
