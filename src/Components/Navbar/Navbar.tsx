import './navbar.css'
import logo from '../../assets/logo.png'
import { useRef, useState } from 'react'
import underline from '../../assets/nav_underline.png'
import { useNavigate, useLocation } from 'react-router-dom'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const menuRef = useRef<HTMLUListElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0";
    }
  }

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "-350px";
    }
  }

  const handleNavClick = (sectionId: string, name: string) => {
    setMenu(name);
    closeMenu();

    // If we're not on the homepage, navigate there first
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      // Delay to ensure homepage renders before scrolling
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='navbar'>
      <span className='nav-logo-container'>
        <p>प्र</p>
        <img src={logo} alt='' />
      </span>
      <img src={menu_open} alt="" onClick={openMenu} className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} alt="" onClick={closeMenu} className="nav-mob-close" />
        <li onClick={() => handleNavClick('Home', 'Home')}>
          <p>Home</p>{menu === "Home" && <img src={underline} alt='' />}
        </li>
        <li onClick={() => handleNavClick('About', 'About')}>
          <p>About</p>{menu === "About" && <img src={underline} alt='' />}
        </li>
        <li onClick={() => handleNavClick('Experience', 'Experience')}>
          <p>Experience</p>{menu === "Experience" && <img src={underline} alt='' />}
        </li>
        <li onClick={() => handleNavClick('Project', 'Projects')}>
          <p>Projects</p>{menu === "Projects" && <img src={underline} alt='' />}
        </li>
        <li onClick={() => handleNavClick('Contact', 'Contact')}>
          <p>Contact</p>{menu === "Contact" && <img src={underline} alt='' />}
        </li>
      </ul>

      <div className="nav-connect" onClick={() => handleNavClick('Contact', 'Contact')}>
        <p>Connect With Me</p>
      </div>
    </div>
  )
}

export default Navbar
