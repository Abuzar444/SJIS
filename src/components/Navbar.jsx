import { NavLink } from 'react-router-dom';
import { links } from '../data';

const Navbar = () => {
  return (
    <nav className='bg-red-400'>
      <div className='align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 justify-between'>
        <h2 className='text-3xl font-bold'>
          SJ<span className='text-red-600'>IS</span>
        </h2>
        <div className='flex gap-x-3'>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <NavLink to={href} key={id} className='capitalize text-lg tracking-wide hover:text-emerald-600 duration-300'>{text}</NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;