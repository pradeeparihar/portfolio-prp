import "./hero.css";
import portfoli_img from "../../assets/profile_pic3.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="Home" className="hero">
      <img src={portfoli_img} alt="" />
      <h1><span>I'm Pradeep Parihar,</span> frontend developer based on Mumbai, India.</h1>
      <p>
        I am a frontend developer from Mumbai, India having 4+  years of
        experience in multiple domains like Logistics, EdTech, Community App and
        Share Broker's App.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
            <AnchorLink className='anchor-link' href='#Contact'>Connect With Me</AnchorLink>
        </div>
        <div className="hero-resume">
            Download My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
