import React from "react";
import "./nav.css";
import { MdHomeFilled } from "react-icons/md";
// import { FaUserTie } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
// import { FaHandshake } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <MdHomeFilled />
      </a>
      {/* <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUserTie />
      </a> */}
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <AiOutlineFundProjectionScreen />
      </a>
      {/* <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}><FaHandshake/></a> */}
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdEmail />
      </a>
    </nav>
  );
};

export default Nav;
