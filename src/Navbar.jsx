import "./Components/CSS/navbar.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  // State to manage the active item
  const [activeItem, setActiveItem] = useState("Home");

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
        <motion.button
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="hire-btn"
        >
          Hire Me
        </motion.button>
        <motion.p
        initial={{opacity: 0, x: 500}}
        animate={{opacity: 1, x: 0}}
        className="menu-btn">MENU</motion.p>
      </nav>
    </header>
  );
};

export default Navbar;
