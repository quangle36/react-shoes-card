import React from 'react';
import { IProduct, IShopItem } from '../type';

interface IAppContext {
	items: IProduct[];
	addItem: (item: IProduct) => void;
	removeItem: (itemId: number) => void;
	onChangeQuantity: ({
		itemId,
		type,
	}: {
		itemId: number;
		type: 'increase' | 'decrease';
	}) => void;
}
const AppContext = React.createContext<IAppContext>({
	items: [],
	addItem: () => {},
	removeItem: () => {},
	onChangeQuantity: () => {},
});

export const AppProvider = ({ children }: React.PropsWithChildren) => {
	const [items, setItems] = React.useState<IProduct[]>([]);
	function addItem(newItem: IProduct) {
		setItems((prev) => [...prev, newItem]);
	}

	function removeItem(itemId: number) {
		setItems((prev) => {
			const clonedItems = JSON.parse(JSON.stringify(prev)) as IShopItem[];
			const newItems = clonedItems.filter((item) => item.id !== itemId);
			return newItems;
		});
	}
	function onChangeQuantity({
		itemId,
		type,
	}: {
		itemId: number;
		type: 'increase' | 'decrease';
	}) {
		setItems((prevItems) =>
			prevItems.map((prevItem) => {
				if (prevItem.id === itemId) {
					const curentQuantity = prevItem.quantity || 1;
					const newQuantity =
						type === 'increase'
							? curentQuantity + 1
							: Math.max(1, curentQuantity - 1);
					return {
						...prevItem,
						quantity: newQuantity,
					};
				}
				return prevItem;
			})
		);
	}
	return (
		<AppContext.Provider
			value={{ items, addItem, removeItem, onChangeQuantity }}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => React.useContext(AppContext);
