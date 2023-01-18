import style from './App.module.css';
import { ProductCard } from './components/ProductCard';
import { products } from './data/products';

export const App = () => {
	return (
		<main className={style.wrapper}>
			<section className={style.container}>
				<h2 className={style.header}>Ты сегодня покормил кота?</h2>
				<ul className={style.cardsContainer}>
					{products.map((product) => (
						<ProductCard key={product.details} product={product} />
					))}
				</ul>
			</section>
		</main>
	);
};
