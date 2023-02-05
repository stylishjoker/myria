import ListBanner from '@/Assets/sliders';
import LayoutImg from '@/Components/LayoutSlider/LayoutImg';
import ButtonLink from '@/Components/ButtonLink';

const Slider_1 = () => {
	const props = {
		link: '/MarketPlace',
		name: 'EXPLORE MARKETPLACE',
	};
	return (
		<>
			<LayoutImg path={ListBanner.banner1}>
				<div className={'center_col'}>
					<span>MYRIA L2 IS LIVE!</span>
					<span>Trade and collect NFTs with 0 fees</span>
					<ButtonLink {...props} />
				</div>
			</LayoutImg>
		</>
	);
};
export default Slider_1;
