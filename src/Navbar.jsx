import "./navbar.css";
import React, { useState } from "react";
import { motion } from "framer-motion";

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
    <header>
      <nav>
        <motion.h1
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
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
            Home
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -500 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={getNavItemColor("About Me")}
            onClick={() => handleItemClick("About Me")}
          >
            About Me
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -500 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={getNavItemColor("Diplomas")}
            onClick={() => handleItemClick("Diplomas")}
          >
            Diplomas
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -500 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={getNavItemColor("Projects")}
            onClick={() => handleItemClick("Projects")}
          >
            Projects
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -500 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={getNavItemColor("Contact Me")}
            onClick={() => handleItemClick("Contact Me")}
          >
            Contact Me
          </motion.p>
        </div>
        <motion.button
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          className="hire-btn"
        >
          Hire Me
        </motion.button>
        <p className="menu-btn">MENU</p>
      </nav>
    </header>
  );
};

export default Navbar;
