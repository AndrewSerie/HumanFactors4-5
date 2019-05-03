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

	getAddonItems() {
		return of(this.generateAddonItems());
	}

	private generateAddonItems(): Addon[] {
		return [
			{
				name: 'Peanut Butter',
				price: 0.5,
				inStock: true
			},
			{
				name: 'Strawberry Jam',
				price: 0.5,
				inStock: true
			},
			{
				name: 'Plain Cream Cheese',
				price: 1.0,
				inStock: true
			},
			{
				name: 'Veggie Cream Cheese',
				price: 1.0,
				inStock: true
			},
			{
				name: 'Raspberry Cream Cheese',
				price: 1.0,
				inStock: true
			},
			{
				name: 'Cinnamon Sugar Cream Cheese',
				price: 1.0,
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

	private generateBagelItems(): Item[] {
		return [
			{
				name: 'Plain',
				inStock: true,
				unitPrice: 2.25,
				description: 'A plain but simple bagel.',
				addons: []
			},
			{
				name: 'Everything',
				inStock: true,
				unitPrice: 2.5,
				description:
					'Spices containing poppy seeds, sesame seeds, garlic and onion.',
				addons: []
			},
			{
				name: 'Onion',
				inStock: true,
				unitPrice: 2.5,
				description: 'A simple onion bagel.',
				addons: []
			},
			{
				name: 'Asiago Cheese',
				inStock: true,
				unitPrice: 2.5,
				description: 'Bagel topped with asiago cheese.',
				addons: []
			},
			{
				name: 'Cinnamon Sugar',
				inStock: true,
				unitPrice: 2.5,
				description: 'Bagel topped with cinnamon sugar.',
				addons: []
			},
			{
				name: 'Blueberry',
				inStock: false,
				unitPrice: 2.5,
				description: 'Blueberries baked right into the bagel.',
				addons: []
			},
			{
				name: 'Chocolate Chip',
				inStock: true,
				unitPrice: 2.5,
				description: 'Milk chocolate chips baked right into the bagel.',
				addons: []
			},
			{
				name: 'Cinnamon Raisin',
				inStock: true,
				unitPrice: 2.5,
				description: 'Cinnamon and raisins baked right into the bagel.',
				addons: []
			}
		];
	}

	private generateCoffeeItems(): Item[] {
		return [
			{
				name: 'Black',
				inStock: true,
				unitPrice: 2.0,
				description: 'Plain black coffee.',
				addons: []
			}
		];
	}
}
