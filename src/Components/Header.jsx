import React from "react";
import { Link as ScrollLink, animateScroll as scroll  } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "../CSS/header.css";

const Header = () => {

  const smoothScrollToTop = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 1000,
    });
  };

  return (
    <header>
      <nav>
        <h3>GIORGI</h3>

        <div>
          <RouterLink onClick={smoothScrollToTop} style={{textDecoration: 'none', color: 'white'}} to="/" smooth={true} duration={1000} offset={-90}>
            <p>Home</p>
          </RouterLink>
          <ScrollLink to="about" smooth={true} duration={1000} offset={-90}>
            <p>About Me</p>
          </ScrollLink>
          <RouterLink style={{textDecoration: 'none', color: 'white'}} to="/Diplomas">
            <p>Diplomas</p>
          </RouterLink>
          <RouterLink style={{textDecoration: 'none', color: 'white'}}k to="projects" smooth={true} duration={1000}>
            <p>Projects</p>
          </RouterLink>
          <ScrollLink to="contact" smooth={true} duration={1000}>
            <p>Contact Me</p>
          </ScrollLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
