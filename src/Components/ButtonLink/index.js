import Link from 'next/link';

import classes from './ButtonLink.module.css';

const ButtonLink = (props) => {
	const { link, name } = props;
	return (
		<div className={classes.wrapper}>
			<Link href={link} className={classes.link}>
				{name}
			</Link>
		</div>
	);
};

export default ButtonLink;
