import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider {...settings} />
            <div>
                <h1>H1</h1>
            </div>
            <div>
                <h1>H1</h1>
            </div>
        </div>
    )
}
export default SliderCarousel