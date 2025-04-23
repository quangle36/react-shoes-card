import { useAppContext } from '../contexts/AppContext';
import ShopItemCart from './ShopItemCart';

function YourCart() {
	const { items, onChangeQuantity } = useAppContext();
	const { totalPrice, totalQuantity } = items.reduce(
		(acc, item) => {
			acc.totalQuantity += item.quantity || 0;
			acc.totalPrice += item.price * (item.quantity || 0);
			return acc;
		},
		{
			totalPrice: 0,
			totalQuantity: 0,
		}
	);
	return (
		<div className="card">
			<div className="cardTop">
				<img
					alt=""
					src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
				/>
				<div>Total: {totalQuantity}</div>
			</div>

			<div className="cardTitle">
				<span>Your cart</span>
				<span className="card_amount">${totalPrice.toFixed(2)}</span>
			</div>
			<div className="cardBody">
				{items.map((item) => (
					<ShopItemCart
						key={item.id}
						name={item?.name}
						price={item?.price}
						description={item?.description}
						image={item.image}
						onChangeQuantity={onChangeQuantity}
						id={item.id}
						quantity={item.quantity}
					/>
				))}
			</div>
		</div>
	);
}

export default YourCart;
