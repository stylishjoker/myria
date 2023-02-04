import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ListSlider } from './SliderObject';

const SlickSlider = () => {
	return (
		<div>
			<Slider>
				{ListSlider.map((item) => {
					const Slide = item.component;
					return (
						<>
							<Slide key={item.id} />
						</>
					);
				})}
			</Slider>
		</div>
	);
};
export default SlickSlider;
