// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { links } from '../data';

const NavLinks = () => {
    return (
        <>
            {links.map((link) => {
                const { id, href, text } = link;
                // if ((url === 'checkout' || url === 'orders') && !user) return null;
                return (
                    <li key={id}>
                        <NavLink className='capitalize' to={href}>
                            {text}
                        </NavLink>
                    </li>
                );
            })}
        </>
    );
};
export default NavLinks;