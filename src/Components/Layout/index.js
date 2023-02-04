import Header from '@/Layout/Header';

const Layout = (props) => {
	return (
		<header>
			<Header />
			<main>{props.children}</main>
		</header>
	);
};
export default Layout;
