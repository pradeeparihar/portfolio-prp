import './navbar.css'
import logo from '../../assets/logo.png'
import { useRef, useState } from 'react'
import underline from '../../assets/nav_underline.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu] = useState("Home");
const menuRef = useRef<HTMLUListElement | null>(null);

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

  return (
    <div className='navbar'>
        <span className='nav-logo-container'><p>प्र</p><img src={logo} alt='' /></span>
        <img src={menu_open} alt="" onClick={openMenu} className='nav-mob-open'/>
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} alt="" onClick={closeMenu} className="nav-mob-close" />
            <li><AnchorLink className='anchor-link' href='#Home'><p onClick={() => setMenu("Home")}>Home</p></AnchorLink>{menu === "Home" ? <img src={underline} alt='' /> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#About'><p onClick={() => setMenu("About")}>About</p></AnchorLink>{menu === "About" ? <img src={underline} alt='' /> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#Experience'><p onClick={() => setMenu("Experience")}>Experience</p></AnchorLink>{menu === "Experience" ? <img src={underline} alt='' /> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#Project'><p onClick={() => setMenu("Projects")}>Projects</p></AnchorLink>{menu === "Projects" ? <img src={underline} alt='' /> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#Contact'><p onClick={() => setMenu("Contact")}>Contact</p></AnchorLink>{menu === "Contact" ? <img src={underline} alt='' /> : <></>}</li>
        </ul>
        <div className="nav-connect">
            
            <AnchorLink className='anchor-link' offset={50} href='#Contact'><p onClick={() => setMenu("Contact")}>Connect With Me</p></AnchorLink>
        </div>
    </div>
  )
}

export default Navbar