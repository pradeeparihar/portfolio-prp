import "./about.css";
import theme_pattern from "../../assets/nav_underline.png";
import portfoli_img from "../../assets/profile_pic.png";

const About = () => {
  return (
    <div id="About" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={portfoli_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a frontend developer from Mumbai, India having 4+ years of
              experience in multiple domains like Logistics, EdTech, Community
              App and Share Broker's App.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }}/></div>
            <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }}/></div>
            <div className="about-skill"><p>Next JS</p><hr style={{ width: "50%" }}/></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>4+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>12+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>7+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
