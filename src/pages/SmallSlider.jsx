import Slider from "react-slick";
import { activities } from "../data";

const SmallSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // fade: true,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        arrows: false,
    };
    return (
        <main className='py-20 rounded-md mb-10 max-w-[90vw] mx-auto bg-neutral'>
            <div>
                <Slider {...settings}>
                    {activities.map((activity) => {
                        return (
                            <div className=' '>
                                <p className='text-7xl btn-primary py-20 pl-32 mx-2 my-2 rounded shadow-2xl text-center'>{activity.icon}</p>
                                <p className=' text-neutral-content text-center capitalize text-2xl'>{activity.activity}</p>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </main>
    )
}
export default SmallSlider