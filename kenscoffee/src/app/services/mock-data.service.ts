import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { of } from 'rxjs';

@Injectable()
export class MockDataService {
	getBagelItems() {
		return of(this.generateBagelItems());
	}

	getCoffeeItems() {
		return of(this.generateCoffeeItems());
	}

	private generateBagelItems(): Item[] {
		return [
			{
				name: 'Plain',
				inStock: true,
				unitPrice: 1.15,
				description: 'A plain but simple bagel.',
				addons: []
			},
			{
				name: 'Everything',
				inStock: true,
				unitPrice: 1.25,
				description: 'A plain but simple bagel.',
				addons: []
			},
			{
				name: 'Onion',
				inStock: true,
				unitPrice: 1.25,
				description: 'A plain but simple bagel.',
				addons: []
			},
			{
				name: 'Asiago Cheese',
				inStock: true,
				unitPrice: 1.25,
				description: 'A plain but simple bagel.',
				addons: []
			},
			{
				name: 'Cinnamon Sugar',
				inStock: true,
				unitPrice: 1.25,
				description: 'A plain but simple bagel.',
				addons: []
			},
			{
				name: 'Blueberry',
				inStock: false,
				unitPrice: 1.25,
				description: 'A plain but simple bagel.',
				addons: []
			}
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
