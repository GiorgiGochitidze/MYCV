import React, { useState } from "react";
import "./navbar.css";

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
        <h1>Giorgi</h1>
        <div className="links-container">
          <p
            style={getNavItemColor("Home")}
            onClick={() => handleItemClick("Home")}
          >
            Home
          </p>
          <p
            style={getNavItemColor("About Me")}
            onClick={() => handleItemClick("About Me")}
          >
            About Me
          </p>
          <p
            style={getNavItemColor("Diplomas")}
            onClick={() => handleItemClick("Diplomas")}
          >
            Diplomas
          </p>
          <p
            style={getNavItemColor("Projects")}
            onClick={() => handleItemClick("Projects")}
          >
            Projects
          </p>
          <p
            style={getNavItemColor("Contact Me")}
            onClick={() => handleItemClick("Contact Me")}
          >
            Contact Me
          </p>
        </div>
        <button className="hire-btn">Hire Me</button>
        <p className="menu-btn">MENU</p>
      </nav>
    </header>
  );
};

export default Navbar;
