import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made with <span className="heart">♥️</span> by <b>Aditya</b> and <b>Manmay</b> using <b>React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;
