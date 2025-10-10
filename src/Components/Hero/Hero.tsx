import "./Hero.css";
import portfoli_img from "../../assets/profile-picture.svg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={portfoli_img} alt="" />
      <h1>I'm Pradeep Parihar, frontend developer based on Mumbai, India.</h1>
      <p>
        I am a frontend developer from Mumbai, India having 4 years of
        experience in multiple domains like Logistics, EdTech, Community App and
        Share Broker's App.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
            Connect With Me
        </div>
        <div className="hero-resume">
            Download My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
