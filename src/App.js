import React from "react";
import Content from "./Content.js";
import Footer from "./Footer.js";
import Nav from "./Navbar.js";
import { useMediaQuery } from 'react-responsive';

const App = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const textStyle = isMobile ? "mobile-class-app" : "desktop-class-app";
  return (
    <div className={textStyle}>
      {/* <Nav /> */}
      <Content />
      <Footer />
    </div>
  );
};

export default App;
