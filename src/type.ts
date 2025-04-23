export interface IShopItem extends IProduct {
	isAdded?: boolean;
	onAddToCart: () => void;
}

export interface IProduct {
	id: number;
	image?: string;
	name: string;
	description: string;
	price: number;
	color?: string;
	quantity?: number;
}

export interface ICartItem extends IProduct {
	onChangeQuantity: ({
		itemId,
		type,
	}: {
		itemId: number;
		type: 'increase' | 'decrease';
	}) => void;
}
