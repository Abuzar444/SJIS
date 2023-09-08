import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import image from '../assets/whatsapp.png'
const HomeLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <div>
                <a href="https://wa.me/971566181832" target='_blank'>
                    <img src={image} alt="whatsapp-image" className="w-[100px] fixed left-0 bottom-0 z-10" />
                </a>
            </div>
        </div>
    )
}
export default HomeLayout