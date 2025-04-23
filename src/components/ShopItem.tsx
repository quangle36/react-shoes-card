import Button from './Button';
import { IShopItem } from '../type';

const ShopItem = (props: IShopItem) => {
	const {
		name,
		description,
		price,
		image,
		isAdded = false,
		onAddToCart,
	} = props;
	const handleClickAdd = () => {
		if (onAddToCart) {
			onAddToCart();
		}
	};
	return (
		<div className="shopItem">
			<div
				className="shopItem_image"
				style={{ backgroundColor: 'rgb(212, 215, 214)' }}
			>
				<img alt={`${name} product image`} src={image} loading="lazy" />
			</div>
			<div className="shopItem_name">{name}</div>
			<div className="shopItem_description">{description}</div>
			<div className="shopItem_bottom">
				<div className="shopItem_price">${price.toFixed(2)}</div>

				<Button
					disabled={isAdded}
					onClick={handleClickAdd}
					buttonText={`${isAdded ? 'ADDED' : 'ADD TO CART'}`}
				/>
			</div>
		</div>
	);
};

export default ShopItem;
