import React from "react";
import { Link } from "react-scroll";
import "../CSS/header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <h3>GIORGI</h3>

        <div>
          <Link to="home" smooth={true} duration={1000} offset={-90}>
            <p>Home</p>
          </Link>
          <Link to="about" smooth={true} duration={1000} offset={-90}>
            <p>About Me</p>
          </Link>
          <Link to="diplomas" smooth={true} duration={1000}>
            <p>Diplomas</p>
          </Link>
          <Link to="projects" smooth={true} duration={1000}>
            <p>Projects</p>
          </Link>
          <Link to="contact" smooth={true} duration={1000}>
            <p>Contact Me</p>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
