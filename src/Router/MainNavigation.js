import Link from 'next/link';
import { useRouter } from 'next/router';

import Myria from '@/Icon/Myria';
import { MainObject } from './MainObject';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
	const router = useRouter();
	return (
		<>
			<nav>
				<ul>
					{MainObject.map((item) => {
						if (item.id === 1) {
							return (
								<li key={item.id}>
									<Link href={item.link}>
										<Myria />
									</Link>
								</li>
							);
						}
						return (
							<li
								key={item.id}
								className={
									item.link === router.pathname
										? classes.selected
										: classes.notSelected
								}>
								<Link href={item.link}>{item.name}</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
};
export default MainNavigation;
