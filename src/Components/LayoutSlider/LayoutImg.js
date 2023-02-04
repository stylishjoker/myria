import classes from './LayoutImg.module.css';

const LayoutImg = (props) => {
	const path = props.path.default.src;
	return (
		<div
			className={classes.wrapper}
			style={{ backgroundImage: 'url(' + path + ')' }}>
			{props.childred}
		</div>
	);
};
export default LayoutImg;
