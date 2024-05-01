import { FaCss3, FaFigma, FaGitAlt, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import "./CSS/aboutme.css";
import { TbBrandJavascript } from "react-icons/tb";
import { FiFramer } from "react-icons/fi";
import { SiAdobephotoshop, SiMongodb } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { BiLogoNetlify } from "react-icons/bi";

const AboutMe = ({cvDownload, setCvDownload}) => {
  return (
    <div id="aboutMe" className="aboutme-container">
      <h1 data-aos="fade-up">About Me</h1>
      <p data-aos="fade-up" data-aos-delay="150">Junior React Developer and starter Full-Stack Developer</p>

      <p data-aos="fade-up" data-aos-delay="250" className="aboutme-text">
        Hi, I'm Giorgi, a beginner React web developer with 1 years of
        programming experience. Proficient in React, JavaScript, HTML, CSS,
        Python, NodeJS(basics such as registration/login, saving data and so
        on), Netlify, Git, Github, Render(for hosting backend server), Photoshop
        CS6, Framer Motion(for making beauiful animations) AOS(for making
        animations on scroll) I'm good in solving complex problems efficiently.
        While my main focus is Front-End, I also learning Back-End, and aiming
        for Full-Stack high knowledge. I'm actively learning Python and other
        technologies. Beyond coding, I attend courses to enhance my skills. I'm
        eager to collaborate with experienced developers and designers to bring
        innovative web projects to life. Despite a short project list, my
        determination to make a significant impact in web development is
        unwavering.
      </p>
      <button onClick={() => cvDownload ? setCvDownload(false) : setCvDownload(true)} data-aos="fade-up" data-aos-delay="300" className="download-cv">Download CV</button>

      <div className="skills-container">
        <div data-aos="fade-up" className="skills-card">
          <FaHtml5 size={50} color="white" />
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className="skills-card">
          <FaCss3 size={50} color="white" />
        </div>

        <div data-aos="fade-up" data-aos-delay="150" className="skills-card">
          <TbBrandJavascript size={50} color="white" />
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="skills-card">
          <FaReact size={50} color="white" />
        </div>

        <div data-aos="fade-up" data-aos-delay="250" className="skills-card">
          <FaNodeJs size={50} color="white" />
        </div>

        <div data-aos="fade-up" data-aos-delay="300" className="skills-card">
          <FaPython size={50} color="white" />
        </div>

        <div data-aos="fade-up" data-aos-delay="350" className="skills-card">
          <h2>AOS</h2>
        </div>

        <div data-aos="fade-up" data-aos-delay="400" className="skills-card">
          <SiAdobephotoshop size={50} color="white" />
        </div>

        <div data-aos="fade-up" data-aos-delay="450" className="skills-card">
          <FiFramer size={50} color="white" />
        </div>

        <div data-aos="fade-up" data-aos-delay="500" className="skills-card">
          <FaFigma size={50} color="white" />
        </div>

        <div data-aos="fade-up" data-aos-delay="500" className="skills-card">
          <FaGitAlt size={50} color="white" />
        </div>


        <div data-aos="fade-up" data-aos-delay="550" className="skills-card">
          <IoLogoGithub size={50} color="white" />
        </div>

        <div title="MongoDB" data-aos="fade-up" data-aos-delay="550" className="skills-card">
          <SiMongodb size={50} color="white" />
        </div>

        <div title="MongoDB" data-aos="fade-up" data-aos-delay="550" className="skills-card">
          <BiLogoNetlify size={50} color="white" />
        </div>

        <div data-aos="fade-up" data-aos-delay="600" className="skills-card">
          <p style={{color: 'white'}}>MERN <br /> Stack</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="600" className="skills-card">
          <p style={{color: 'white'}}>Render.com</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
