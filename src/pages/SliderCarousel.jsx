import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { activities } from '../data';

const SliderCarousel = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        // fade: true,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        arrows: false,
    };
    return (
        <main className='py-20 rounded-md mb-10 max-w-[90vw] mx-auto bg-slate-300'>
            <div>
                <Slider {...settings}>
                    {activities.map((activity) => {
                        return (
                            <div className=' '>
                                <p className='text-7xl btn-primary py-6 pl-20 md:pl-4 mx-2 my-2 rounded shadow-2xl'>{activity.icon}</p>
                                <h3 className='text-slate-800 text-center capitalize text-lg'>{activity.activity}</h3>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </main>
    )
}
export default SliderCarousel