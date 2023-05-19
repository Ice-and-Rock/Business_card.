import React from "react";
import ReactDOM from "react-dom/client";
import handleIconClick from "react"
import icon_facebook from "../images/icon_facebook.jpg";
import icon_Github from "../images/icon_Github.png";
import icon_email from "../images/icon_email.png";
import icon_Whatsapp from "../images/icon_Whatsapp.png";
import icon_LinkedIn from "../images/icon_LinkedIn.png";

function Header() {
  return (
    <div className="header">
      <h1>
        <intro>Full Stack Developer</intro>
      </h1>
      <h2>
      <a href="https://www.linkedin.com/in/nicholas-valente-electrics/" target="_blank" rel="noopener noreferrer" onClick={handleIconClick}>
        <img src={icon_LinkedIn} className="headerIcon" alt="LinkedIn icon" />
        </a>
        <a href="https://github.com/Ice-and-Rock" target="_blank" rel="noopener noreferrer" onClick={handleIconClick}>
        <img src={icon_Github} className="headerIcon" alt="Github icon" />
        </a>
        <a href="mailto:nvalente.elecgrics@gmail.com" target="_blank" rel="noopener noreferrer" onClick={handleIconClick}>
        <img src={icon_email} className="headerIcon" alt="Email icon" />
        </a>
        <a href="https://wa.me/1234567890?text=Hello%20there!" target="_blank" rel="noopener noreferrer" onClick={handleIconClick}>
        <img src={icon_Whatsapp} className="headerIcon" alt="Whatsapp icon" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=847380014" target="_blank" rel="noopener noreferrer" onClick={handleIconClick}>
        <img src={icon_facebook} className="headerIcon" alt="Facebook icon" />
        </a>
      </h2>
    </div>
  );
}

export default Header;
