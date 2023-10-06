import Slider from "react-slick";
import { activities } from "../data";

const MediumSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
                                <h3 className=' text-neutral-content text-center capitalize text-2xl'>{activity.activity}</h3>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </main>
    )
}
export default MediumSlider