import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "../CSS/header.css";
import React, { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(true);

  const smoothScrollToTop = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 1000,
    });
  };

  const isMenu = () => {
    smoothScrollToTop();
    if (menu) {
      setMenu(false);
    } else if (!menu) {
      setMenu(true);
    }
  };

  return (
    <>
      <header>
        <nav>
          <h3>GIORGI</h3>

          <div>
            <RouterLink
              onClick={smoothScrollToTop}
              style={{ textDecoration: "none", color: "white" }}
              to="/"
              smooth="true"
              duration={1000}
              offset={-90}
            >
              <p>Home</p>
            </RouterLink>
            <ScrollLink to="about" smooth="true" duration={1000} offset={-90}>
              <p>About Me</p>
            </ScrollLink>
            <RouterLink
              style={{ textDecoration: "none", color: "white" }}
              to="/Diplomas"
            >
              <p>Diplomas</p>
            </RouterLink>
            <RouterLink
              to="/Projects"
              style={{ textDecoration: "none", color: "white" }}
              smooth="true"
              duration={1000}
            >
              <p>Projects</p>
            </RouterLink>
            <ScrollLink to="contact" smooth="true" duration={1000}>
              <p>Contact Me</p>
            </ScrollLink>
          </div>

          <button
            className="menu-btn"
            onClick={() => (menu ? setMenu(false) : setMenu(true))}
          >
            MENU
          </button>
        </nav>
      </header>

      {menu && (
        <div className="menu-container">
          <div className="menu-box">
            <RouterLink
              onClick={isMenu}
              to="/"
              smooth="true"
              duration={1000}
              offset={-90}
              className="links"
            >
              <p>Home</p>
            </RouterLink>
            <ScrollLink
              onClick={isMenu}
              className="links"
              to="about"
              smooth="true"
              duration={1000}
              offset={-90}
            >
              <p>About Me</p>
            </ScrollLink>
            <RouterLink onClick={isMenu} className="links" to="/Diplomas">
              <p>Diplomas</p>
            </RouterLink>
            <RouterLink
              onClick={isMenu}
              to="/Projects"
              className="links"
              smooth="true"
              duration={1000}
            >
              <p>Projects</p>
            </RouterLink>
            <ScrollLink
              onClick={isMenu}
              className="links"
              style={{ marginBottom: "-10px" }}
              to="contact"
              smooth="true"
              duration={1000}
            >
              <p>Contact Me</p>
            </ScrollLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
