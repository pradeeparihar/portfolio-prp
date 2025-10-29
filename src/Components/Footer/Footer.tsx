import './footer.css';
import logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <span className='footer-logo-container'><p>प्र</p><img src={logo} alt='' /></span>
                <p>I am a frontend developer from Mumbai, India having 4+ years of
              experience in multiple domains like Logistics, EdTech, Community
              App and BFSI App.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter Your Email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p className="footer-bottom-left">
            © Pradeep Parihar. All Rights Reserved.
          </p>
          <div className="footer-bottom-right">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Connect With Me</p>
          </div>
        </div>
    </div>
  )
}

export default Footer