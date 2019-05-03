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
				unitPrice: 2.50,
				description: 'A plain but simple bagel.',
				addons: []
			},
			{
				name: 'Onion',
				inStock: true,
				unitPrice: 2.50,
				description: 'A plain but simple bagel.',
				addons: []
			},
			{
				name: 'Asiago Cheese',
				inStock: true,
				unitPrice: 2.50,
				description: 'A plain but simple bagel.',
				addons: []
			},
			{
				name: 'Cinnamon Sugar',
				inStock: true,
				unitPrice: 2.50,
				description: 'A plain but simple bagel.',
				addons: []
			},
			{
				name: 'Blueberry',
				inStock: false,
				unitPrice: 2.50,
				description: 'A plain but simple bagel.',
				addons: []
			},
			{
				name: 'Chocolate Chip',
				inStock: true,
				unitPrice: 2.50,
				description: 'A plain but simple bagel.',
				addons: []
			},
			{
				name: 'Cinnamon Raisin',
				inStock: true,
				unitPrice: 2.50,
				description: 'A plain but simple bagel.',
				addons: []
			}
		];
	}

	private generateCoffeeItems(): Item[] {
		return [
			{
				name: 'Black',
				inStock: true,
				unitPrice: 2.00
			}
		];
	}
}
