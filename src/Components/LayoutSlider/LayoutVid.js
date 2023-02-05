import classes from './LayoutVid.module.css';

const LayoutVid = (props) => {
	return (
		<div className={classes.wrapper}>
			<video className={classes.video} autoPlay loop>
				<source
					src="https://myria.com/videos/home/moonville.mp4"
					type="video/mp4"
				/>
			</video>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};
export default LayoutVid;
