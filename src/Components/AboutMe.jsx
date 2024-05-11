import {
  FaCss3,
  FaFigma,
  FaGitAlt,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import "./CSS/aboutme.css";
import { TbBrandJavascript } from "react-icons/tb";
import { FiFramer } from "react-icons/fi";
import { SiAdobephotoshop, SiMongodb } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { BiLogoNetlify } from "react-icons/bi";

const AboutMe = ({ cvDownload, setCvDownload }) => {
  return (
    <div id="aboutMe" className="aboutme-container">
      <div className="about-text-container">
        <p
          style={{ textAlign: "justify" }}
          data-aos="fade-up"
          data-aos-delay="250"
          className="aboutme-text"
        >
          <h1 data-aos="fade-up">About Me</h1>
          Hi, I'm Giorgi, a MERN Stack developer with 1.6 years of programming
          experience. Proficient in MERN Stack (MongoDB, ExpressJS, React,
          NodeJS), React, JavaScript, HTML, CSS, Python, NodeJS, Netlify, Git,
          Github, Render.com(for hosting backend server), Photoshop CS6,
          MongoDB(NoSQL database), Framer Motion(for making beauiful animations)
          AOS(for making animations on scroll), Cloudinary(cloud service for
          uploading images when deploying site ), I'm good in solving complex
          problems efficiently, my main focus is MERN Stack development Beyond
          coding, I learning about business to enhance my skills. I'm eager to
          collaborate with experienced developers and designers to bring
          innovative web projects to life. Despite a short project list, my
          determination to make a significant impact in web development is
          unwavering.
        </p>

        <p data-aos="fade-up" data-aos-delay="250" className="aboutme-text">
          <h1 data-aos="fade-up">Why Me</h1>
          If you are here it means you're intrested in what i doing. Let me
          explain why you should choose me and what you might miss out on if you
          decide otherwise.
          <br />
          Firstly i have a strong foundation of understanding how MERN stack
          forks both in theory and practice, i orientated to gain more knowledge
          from practice, always use resources at maximum to impress users with
          UI/UX and make, apps comfortable to use and learn something new every
          day. <br />
          Secondly i'm good in solving complex problems in short period of time
          using as my knowledges as other services such as chatGPT, copilot and
          other platforms, develop apps as fast as its possible with high
          performance, also i have experience in working with team and project
          managment.
          <br />
          So what if you decide not to choose me? <br />
          You'd be passing up on a developer who is quick-witted, adaptable, and
          always striving for improvement. I'm ready to maximizie the potential
          of every project I take.
        </p>
      </div>
      <button
        onClick={() =>
          cvDownload ? setCvDownload(false) : setCvDownload(true)
        }
        data-aos="fade-up"
        data-aos-delay="300"
        className="download-cv"
      >
        Download CV
      </button>

      <div className="skills-container">
        <div title="HTML" data-aos="fade-up" className="skills-card">
          <FaHtml5 size={50} color="white" />
        </div>

        <div
          title="CSS"
          data-aos="fade-up"
          data-aos-delay="100"
          className="skills-card"
        >
          <FaCss3 size={50} color="white" />
        </div>

        <div
          title="JAVASCRIPT"
          data-aos="fade-up"
          data-aos-delay="150"
          className="skills-card"
        >
          <TbBrandJavascript size={50} color="white" />
        </div>

        <div
          title="REACT"
          data-aos="fade-up"
          data-aos-delay="200"
          className="skills-card"
        >
          <FaReact size={50} color="white" />
        </div>

        <div
          title="NODEJS"
          data-aos="fade-up"
          data-aos-delay="250"
          className="skills-card"
        >
          <FaNodeJs size={50} color="white" />
        </div>

        <div
          title="PYTHON"
          data-aos="fade-up"
          data-aos-delay="300"
          className="skills-card"
        >
          <FaPython size={50} color="white" />
        </div>

        <div
          title="Animate On Scroll"
          data-aos="fade-up"
          data-aos-delay="350"
          className="skills-card"
        >
          <h2>AOS</h2>
        </div>

        <div
          title="PHOTOSHOP CS6"
          data-aos="fade-up"
          data-aos-delay="400"
          className="skills-card"
        >
          <SiAdobephotoshop size={50} color="white" />
        </div>

        <div
          title="FRAMER MOTION"
          data-aos="fade-up"
          data-aos-delay="450"
          className="skills-card"
        >
          <FiFramer size={50} color="white" />
        </div>

        <div
          title="FIGMA"
          data-aos="fade-up"
          data-aos-delay="500"
          className="skills-card"
        >
          <FaFigma size={50} color="white" />
        </div>

        <div
          title="GIT"
          data-aos="fade-up"
          data-aos-delay="500"
          className="skills-card"
        >
          <FaGitAlt size={50} color="white" />
        </div>

        <div
          title="GITHUB"
          data-aos="fade-up"
          data-aos-delay="550"
          className="skills-card"
        >
          <IoLogoGithub size={50} color="white" />
        </div>

        <div
          title="MongoDB"
          data-aos="fade-up"
          data-aos-delay="550"
          className="skills-card"
        >
          <SiMongodb size={50} color="white" />
        </div>

        <div
          title="NETLIFY"
          data-aos="fade-up"
          data-aos-delay="550"
          className="skills-card"
        >
          <BiLogoNetlify size={50} color="white" />
        </div>

        <div
          title="MERN - MongoDB, ExpressJS, React, NodeJS"
          data-aos="fade-up"
          data-aos-delay="600"
          className="skills-card"
        >
          <p style={{ color: "white" }}>
            MERN <br /> Stack
          </p>
        </div>

        <div
          title="RENDER"
          data-aos="fade-up"
          data-aos-delay="600"
          className="skills-card"
        >
          <p style={{ color: "white" }}>Render.com</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
