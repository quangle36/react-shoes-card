import { data } from '../data';
import ShopItem from './ShopItem';
import { useAppContext } from '../contexts/AppContext';
import { IProduct } from '../type';
function OurProduct() {
	const { addItem, items } = useAppContext();

	const handleAddToCart = (item: IProduct) => {
		if (!items.some((cartItem) => cartItem.id === item.id))
			addItem({ ...item, quantity: 1 });
	};
	return (
		<div className="card">
			<div className="cardTop">
				<img
					alt=""
					src="https://
          cdn-icons-png.flaticon.com/512/732/732084.png"
				/>
			</div>

			<div className="cardTitle">Our Products</div>

			<div className="cardBody">
				{data.map((product) => {
					const isAdded = items.some((cartItem) => cartItem.id === product.id);
					return (
						<ShopItem
							key={product.id}
							{...product}
							onAddToCart={() => {
								handleAddToCart(product);
							}}
							isAdded={isAdded}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default OurProduct;
