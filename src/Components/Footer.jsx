import { FaFacebook } from "react-icons/fa";
import "./CSS/footer.css";
import { BsGithub } from "react-icons/bs";
import { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { Link } from "react-scroll";

const Footer = () => {
  const [facebookColor, setFacebookColor] = useState("gray");
  const [githubColor, setGithubColor] = useState("gray");

  return (
    <footer>
      <div className="footer-navigation">
        <h1>Giorgi</h1>

        <div className="navigation-links">
          <Link to="navbar" smooth={true} duration={800} width={0} height={0}>
            <p>Home</p>
          </Link>
          <Link to="services" offset={-100} smooth={true} duration={800}>
            <p>Services</p>
          </Link>
          <Link to="aboutMe" offset={-100} smooth={true} duration={800}>
            <p>AboutMe</p>
          </Link>
          <Link to="portfolio" offset={-100} smooth={true} duration={800}>
            <p>Portfolio</p>
          </Link>
          <Link to="contactMe" offset={-80} smooth={true} duration={800}>
            <p>Contact Me</p>
          </Link>
        </div>

        <div className="mini-links">
          <a
            href="https://www.facebook.com/giorgi.gochitidze.39/"
            target="_blank"
          >
            <FaFacebook
              size={30}
              color={facebookColor}
              onMouseEnter={() => setFacebookColor("white")}
              onMouseLeave={() => setFacebookColor("gray")}
            />
          </a>

          <a href="https://github.com/GiorgiGochitidze" target="_blank">
            <BsGithub
              size={30}
              color={githubColor}
              onMouseEnter={() => setGithubColor("white")}
              onMouseLeave={() => setGithubColor("gray")}
            />
          </a>
        </div>
      </div>

      <div className="footer-contact">
        <p>
          <IoMailOutline size={25} color="rgb(149, 149, 149)" />
          giorgigochitidze555@gmail.com
        </p>

        <p>
          <LuPhone size={25} color="rgb(149, 149, 149)" />
          +995 593 34 84 57
        </p>
      </div>
    </footer>
  );
};

export default Footer;
