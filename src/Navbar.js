import React, { useState } from "react";
import logo from "./img/logo.png";

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="navBar">
      <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>...</ul>
    </nav>
  );
};

export default Nav;
