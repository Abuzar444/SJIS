import heroImg from '../assets/hero.jpg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${heroImg})` }}
      className={`bg-no-repeat bg-cover h-screen w-full`}
    >
      <div className='w-full h-full flex  justify-center items-center backdrop-brightness-75 bg-red-600/30'>
        <h1 className='text-[2rem] text-white'>Start your business in Dubai</h1>
      </div>
    </div>
  );
};
export default Hero;
