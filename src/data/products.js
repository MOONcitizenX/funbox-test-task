import catImg from '../assets/img/Cat.png';

export const products = [
	{
		descr: 'Сказочное заморское яство',
		descrHover: 'Котэ не одобряет?',
		name: 'Нямушка',
		flavour: 'с фуа-гра',
		portions: ['10', 'порций'],
		bonus: ['', 'мышь в подарок'],
		optional: '',
		details: 'Печень утки разварная с артишоками.',
		image: catImg,
		weight: '0,5',
		weightUnit: 'кг',
		quantity: 1
	},
	{
		descr: 'Сказочное заморское яство',
		descrHover: 'Котэ не одобряет?',
		name: 'Нямушка',
		flavour: 'с рыбой',
		portions: ['40', 'порций'],
		bonus: ['2', 'мыши в подарок'],
		optional: '',
		details: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
		image: catImg,
		weight: '2',
		weightUnit: 'кг',
		quantity: 1
	},
	{
		descr: 'Сказочное заморское яство',
		descrHover: 'Котэ не одобряет?',
		name: 'Нямушка',
		flavour: 'с курой',
		portions: ['100', 'порций'],
		bonus: ['5', 'мышей в подарок'],
		optional: 'заказчик доволен',
		details: 'Филе из цыплят с трюфелями в бульоне.',
		image: catImg,
		weight: '5',
		weightUnit: 'кг',
		quantity: 0
	}
];
