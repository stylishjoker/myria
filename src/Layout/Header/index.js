import MainNavigation from '@/Router/MainNavigation';
import InstallApp from '../InstallApp';
import classes from './Header.module.css';
const Header = () => {
	return (
		<div className={classes.wrapper + ' center_row'}>
			<MainNavigation />
			<InstallApp />
		</div>
	);
};
export default Header;
