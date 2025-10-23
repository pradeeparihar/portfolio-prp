import './navbar.css'
import logo from '../../assets/google-logo-svg.svg'
import { useState } from 'react'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

  const [menu, setMenu] = useState("About")

  return (
    <div className='navbar'>
        <img src={logo} alt='' />
        <ul className="nav-menu">
            <li><AnchorLink className='anchor-link' href='#Home'><p onClick={() => setMenu("Home")}>Home</p></AnchorLink>{menu === "Home" ? <img src={underline} alt='' /> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#About'><p onClick={() => setMenu("About")}>About</p></AnchorLink>{menu === "About" ? <img src={underline} alt='' /> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#Experience'><p onClick={() => setMenu("Experience")}>Experience</p></AnchorLink>{menu === "Experience" ? <img src={underline} alt='' /> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#Project'><p onClick={() => setMenu("Projects")}>Projects</p></AnchorLink>{menu === "Projects" ? <img src={underline} alt='' /> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#Contact'><p onClick={() => setMenu("Contact")}>Contact</p></AnchorLink>{menu === "Contact" ? <img src={underline} alt='' /> : <></>}</li>
        </ul>
        <div className="nav-connect">
            Connect With Me
        </div>
    </div>
  )
}

export default Navbar