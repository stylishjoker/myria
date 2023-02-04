import BuildWithMarya from '@/pages/BuildWithMarya';
import Ecosystem from '@/pages/Ecosystem';
import HomePanes from '@/pages/HomePanes';
import Nodes from '@/pages/Nodes';
import MarketPlace from '@/pages/MarketPlace';

export const MainObject = [
	{
		id: 1,
		name: 'HomePanes',
		link: '/',
		component: HomePanes,
	},
	{
		id: 2,
		name: 'MarketPlace',
		link: '/MarketPlace',
		component: MarketPlace,
	},
	{
		id: 3,
		name: 'Ecosystem',
		link: '/Ecosystem',
		component: Ecosystem,
	},
	{
		id: 4,
		name: 'Nodes',
		link: '/Nodes',
		component: Nodes,
	},
	{
		id: 5,
		name: 'Build With Marya',
		link: '/BuildWithMarya',
		component: BuildWithMarya,
	},
];
