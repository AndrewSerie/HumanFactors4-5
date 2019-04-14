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
				inStock: true
			},
			{
				name: 'Everything',
				inStock: true
			},
			{
				name: 'Onion',
				inStock: true
			},
			{
				name: 'Asiago Cheese',
				inStock: true
			},
			{
				name: 'Cinnamon Sugar',
				inStock: true
			},
			{
				name: 'Blueberry',
				inStock: false
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
