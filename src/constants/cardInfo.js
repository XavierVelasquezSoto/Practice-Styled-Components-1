import { v4 } from 'uuid';

export const CARD_INFO = [
	{
		id: v4(),
		bodyColor: 'sedans',
		img: '/assets/images/sedan.svg',
		title: 'SEDANS',
		textInfo:
			'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
		button: 'Learn More'
	},
	{
		id: v4(),
		bodyColor: 'suvs',
		img: '/assets/images/suv.svg',
		title: 'SUVS',
		textInfo:
			'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
		button: 'Learn More'
	},
	{
		id: v4(),
		bodyColor: 'luxury',
		img: '/assets/images/luxury.svg',
		title: 'LUXURY',
		textInfo:
			'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. ',
		button: 'Learn More'
	}
];
