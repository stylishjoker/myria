import Link from 'next/link';

import InstallLogo from '@/Icon/Install';
import classes from './InstallApp.module.css';

const InstallApp = () => {
	return (
		<>
			<a href="/">
				<div className={classes.wrapper + ' center_row'}>
					<InstallLogo />
					<span>Install Metamask</span>
				</div>
			</a>
		</>
	);
};
export default InstallApp;
