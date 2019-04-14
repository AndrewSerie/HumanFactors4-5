export class Item {
	name: string;
	description?: string;
	unitPrice?: number;
	addons?: Addon[];
	inStock?: boolean;
}

export class Addon {
	name: string;
	price: number;
	inStock: boolean;
}
