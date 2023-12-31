import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import image from '../assets/whatsapp.png'
import Footer from "../components/Footer"
import SliderCarousel from "./SliderCarousel"
import SmallSlider from "./SmallSlider"

const HomeLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <div className="hidden md:block">
                <SliderCarousel />
            </div>
            <div className="md:hidden block">
                <SmallSlider />
            </div>
            <Footer />
            <div>
                <a href="https://wa.me/971566181832" target='_blank'>
                    <img src={image} alt="whatsapp-image" className="w-[100px] fixed right-0 bottom-0 z-10 animate-bounce" width={100} height={100} />
                </a>
            </div>
        </div>
    )
}
export default HomeLayout