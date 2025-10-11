import './navbar.css'
import logo from '../../assets/google-logo-svg.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt='' />
        <ul className="nav-menu">
            <li>Home</li>
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">
            Connect With Me
        </div>
    </div>
  )
}

export default Navbar