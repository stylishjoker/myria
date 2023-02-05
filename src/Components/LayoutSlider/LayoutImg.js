import classes from './LayoutImg.module.css';

const LayoutImg = (props) => {
	console.log(props);
	const path = props.path.default.src;
	return (
		<div
			className={classes.wrapper}
			style={{ backgroundImage: 'url(' + path + ')' }}>
			{props.children}
		</div>
	);
};
export default LayoutImg;
