import "./Components/CSS/navbar.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  // State to manage the active item
  const [activeItem, setActiveItem] = useState("Home");
  const [navMenu, setNavMenu] = useState(false);

  // Function to handle click on navigation items
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  // Determine the color of the navigation items based on the active item
  const getNavItemColor = (itemName) => {
    return activeItem === itemName ? { color: "#FD6F00" } : { color: "gray" };
  };

  return (
    <header id="navbar">
      <nav>
        <motion.h1
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Giorgi
        </motion.h1>
        <div className="links-container">
          <motion.p
            initial={{ opacity: 0, y: -500 }}
            animate={{ opacity: 1, y: 0 }}
            style={getNavItemColor("Home")}
            onClick={() => handleItemClick("Home")}
          >
            <Link
              to="navbar"
              smooth={true}
              duration={800}
              onClick={() => handleItemClick("Home")}
            >
              Home
            </Link>
          </motion.p>

          <Link
            to="services"
            smooth={true}
            duration={800}
            offset={-80}
            onClick={() => handleItemClick("Services")}
          >
            <motion.p
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={getNavItemColor("Services")}
              onClick={() => handleItemClick("Services")}
            >
              Services
            </motion.p>
          </Link>

          <Link
            to="aboutMe"
            smooth={true}
            duration={800}
            offset={-80}
            onClick={() => handleItemClick("About Me")}
          >
            <motion.p
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={getNavItemColor("About Me")}
              onClick={() => handleItemClick("About Me")}
            >
              About Me
            </motion.p>
          </Link>

          <Link
            to="portfolio"
            smooth={true}
            duration={800}
            offset={-80}
            onClick={() => handleItemClick("Projects")}
          >
            <motion.p
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={getNavItemColor("Projects")}
              onClick={() => handleItemClick("Projects")}
            >
              Portfolio
            </motion.p>
          </Link>

          <Link
            to="contactMe"
            smooth={true}
            duration={800}
            offset={-80}
            onClick={() => handleItemClick("Contact Me")}
          >
            <motion.p
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={getNavItemColor("Contact Me")}
              onClick={() => handleItemClick("Contact Me")}
            >
              Contact Me
            </motion.p>
          </Link>
        </div>

        <Link to="contactMe" smooth={true} duration={800} offset={-80}>
          <motion.button
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hire-btn"
          >
            Hire Me
          </motion.button>
        </Link>
        <motion.p
          onClick={() => (navMenu ? setNavMenu(false) : setNavMenu(true))}
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          className="menu-btn"
        >
          <CiMenuFries size={25} color="white" />
        </motion.p>
      </nav>

      {navMenu && (
        <div
          onClick={() => (navMenu ? setNavMenu(false) : setNavMenu(true))}
          className="navmenu-container"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="navmenu-dropbox"
          >
            <motion.h2
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ textAlign: "center", color: "white" }}
            >
              MENU
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0 }}
              style={getNavItemColor("Home")}
              onClick={() => {
                handleItemClick("Home");
                navMenu ? setNavMenu(false) : setNavMenu(true);
              }}
            >
              <Link
                to="home"
                smooth={true}
                duration={800}
                offset={-150}
                onClick={() => {
                  handleItemClick("Home");
                  navMenu ? setNavMenu(false) : setNavMenu(true);
                }}
              >
                Home
              </Link>
            </motion.p>

            <Link
              to="services"
              smooth={true}
              duration={800}
              offset={-80}
              onClick={() => {
                handleItemClick("Services");
                navMenu ? setNavMenu(false) : setNavMenu(true);
              }}
            >
              <motion.p
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={getNavItemColor("Services")}
                onClick={() => handleItemClick("Services")}
              >
                Services
              </motion.p>
            </Link>

            <Link
              to="aboutMe"
              smooth={true}
              duration={800}
              offset={-80}
              onClick={() => {
                handleItemClick("About Me");
                navMenu ? setNavMenu(false) : setNavMenu(true);
              }}
            >
              <motion.p
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={getNavItemColor("About Me")}
                onClick={() => {
                  handleItemClick("About Me");
                  navMenu ? setNavMenu(false) : setNavMenu(true);
                }}
              >
                About Me
              </motion.p>
            </Link>

            <Link
              to="portfolio"
              smooth={true}
              duration={800}
              offset={-80}
              onClick={() => {
                handleItemClick("Projects");
                navMenu ? setNavMenu(false) : setNavMenu(true);
              }}
            >
              <motion.p
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={getNavItemColor("Projects")}
                onClick={() => {
                  handleItemClick("Projects");
                  navMenu ? setNavMenu(false) : setNavMenu(true);
                }}
              >
                Portfolio
              </motion.p>
            </Link>

            <Link
              to="contactMe"
              smooth={true}
              duration={800}
              offset={-80}
              onClick={() => {
                handleItemClick("Contact Me");
                navMenu ? setNavMenu(false) : setNavMenu(true);
              }}
            >
              <motion.p
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                style={getNavItemColor("Contact Me")}
                onClick={() => {
                  handleItemClick("Contact Me");
                  navMenu ? setNavMenu(false) : setNavMenu(true);
                }}
              >
                Contact Me
              </motion.p>
            </Link>

            <Link to="contactMe" smooth={true} duration={800} offset={-80}>
              <motion.button
                initial={{ opacity: 0, x: 500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="hires-btn"
                style={{ margin: "0" }}
                onClick={() => (navMenu ? setNavMenu(false) : setNavMenu(true))}
              >
                Hire Me
              </motion.button>
            </Link>
          </motion.div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
