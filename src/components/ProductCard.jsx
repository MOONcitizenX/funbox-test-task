import classNames from 'classnames';
import { useState } from 'react';
import style from './ProductCard.module.css';

export const ProductCard = ({ product }) => {
	const [isSelected, setIsSelected] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [isFirstHover, setIsFirstHover] = useState(true);

	const handleCardClick = () => {
		if (isSelected) {
			setIsFirstHover(true);
		}
		setIsSelected((prev) => !prev);
	};

	const handleMouseMovement = () => {
		if (isSelected) {
			setIsFirstHover(false);
		}
		setIsHovered((prev) => !prev);
	};

	const firstTimeHoveredAndSelected =
		isHovered && isSelected && !isFirstHover;

	return (
		<li
			className={classNames(style.container, {
				[style.disabled]: product.quantity <= 0,
				[style.selected]: isSelected
			})}
		>
			<div
				className={style.cardContainer}
				onClick={handleCardClick}
				onMouseEnter={handleMouseMovement}
				onMouseLeave={handleMouseMovement}
			>
				<p
					className={classNames(style.description, {
						[style.hoveredCard]: firstTimeHoveredAndSelected
					})}
				>
					{firstTimeHoveredAndSelected
						? product.descrHover
						: product.descr}
				</p>
				<h3 className={style.title}>{product.name}</h3>
				<p className={style.flavour}>{product.flavour}</p>
				<p className={style.info}>
					<span className={style.amount}>{product.portions[0]} </span>
					{product.portions.slice(1).join(' ')}
				</p>
				<p className={style.info}>
					<span className={style.amount}>{product.bonus[0]} </span>
					{product.bonus.slice(1).join(' ')}
				</p>
				{product.optional.length > 0 && (
					<p className={style.info}>{product.optional}</p>
				)}
				<img
					src={product.image}
					alt="Product image"
					className={style.productImage}
				/>
				<div className={style.weight}>
					<span className={style.weightAmount}>{product.weight}</span>
					<span className={style.weightUnit}>
						{product.weightUnit}
					</span>
				</div>
			</div>
			{product.quantity > 0 ? (
				isSelected ? (
					<p className={style.bottomText}>{product.details}</p>
				) : (
					<p className={style.bottomText}>
						Чего сидишь? Порадуй котэ,{' '}
						<span
							className={style.clickToBuy}
							onClick={handleCardClick}
						>
							купи
						</span>
						<span className={style.dot}>.</span>
					</p>
				)
			) : (
				<p className={style.bottomText}>
					Печалька, {product.flavour} закончился.
				</p>
			)}
		</li>
	);
};
