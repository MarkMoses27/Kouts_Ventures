import { useState } from 'react';
import { NavLink, Link} from 'react-router-dom';
import './Nav.css';
import KOUTS_LOGO from '../../assets/kouts_logo.svg';
import { FaBars } from 'react-icons/fa'; 

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu); 
  };

  const hideMenu = () => {
    setShowMenu(false); 
  }


  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={KOUTS_LOGO} alt="Kouts Logo" />
        </Link>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <FaBars />
      </div>
      <ul className={showMenu ? 'show' : ''}>
        <li><NavLink to="/" onClick={hideMenu} className="active" >Home</NavLink></li>
        <li><NavLink to="/about" onClick={hideMenu} >About Us</NavLink></li>
        <li><NavLink to="/services" onClick={hideMenu} >Services</NavLink></li>
        <li><NavLink to="/projects" onClick={hideMenu} >Our Projects</NavLink></li>
        <li><NavLink to="/contact" onClick={hideMenu} >Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
