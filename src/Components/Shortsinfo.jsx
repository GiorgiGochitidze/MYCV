import triangle from "../assets/image.png";
import leftarrow from "../assets/leftarrow.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import python from "../assets/python.png";
import javascript from "../assets/javascript.png";
import netlify from "../assets/netlify.png";
import photoshop from "../assets/photoshop.png";
import framer_motion from "../assets/framer_motion.png";
import react from "../assets/react.png";
import "../CSS/shortsInfo.css";

const Shortsinfo = () => {
  return (
    <div className="short-info">
      <div className="info-container">
        <div className="info">
          <h1>HI, I'm Giorgi</h1>
          <p style={{ marginTop: "-20px" }}>Frontend Developer</p>
          <br />
          <p>
            High level experience in
            <br /> Web development knowledge,
            <br /> production quality work.
          </p>
          <div className="skills-container">
            <i style={{fontSize: '25px'}}>SKILLS:</i> 
            <img src={html} alt="html icon" />
            <img src={css} alt="css icon" />
            <img src={javascript} alt="javascript icon" />
            <img src={react} alt="react icon" />
            <img src={python} alt="python icon" />
            <img src={framer_motion} alt="framer_motion icon" />
            <img src={photoshop} alt="photoshop icon" />
            <img src={git} alt="git icon" />
            <img src={github} alt="github icon" />
            <img src={netlify} alt="netlify icon" />
          </div>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.facebook.com/giorgi.gochitidze.39/"
            target="_blank"
          >

            
            <button className="contactme-button">
              CONTACT ME{" "}
              <img src={leftarrow} style={{ width: "40px", height: "40px" }} />
            </button>
          </a>
        </div>
      </div>

      <img className="triangle" src={triangle} />
    </div>
  );
};

export default Shortsinfo;
