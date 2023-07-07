import React from "react";
import icon_facebook from "../images/icon_facebook.jpg";
import icon_Github from "../images/icon_Github.png";
import icon_email from "../images/icon_email.png";
import icon_Whatsapp from "../images/icon_Whatsapp.png";
import icon_LinkedIn from "../images/icon_LinkedIn.png";

// Render Header with following characteristics:
// All rendered inside an element to be used with CSS flexbox
// - text on left ✅
// - icons on right: LinkedIn, Github, Email, WhatsApp & Facebook ✅
// - Practice two different clickable event handlers for icons:
// -- use onClick variable => HTML function to open a new window when WhatsApp/Facebook are clicked ✅
// -- use onClick then handleClick function to open a new window when LinkedIn, Github and Email icons are clicked ✅

function Header() {
  // set the handleClick variables for WhatsApp / Facebook
  const handleClickWhatsapp = () => {
    const whatsappURL = "https://wa.me/1234567890?text=Hello%20there!";
    window.open(whatsappURL, "_blank");
  };
  const handleClickFacebook = () => {
    const facebookURL = "https://www.facebook.com/profile.php?id=847380014";
    window.open(facebookURL, "_blank");
  };

  return (
    <div className="header">
      <h1>
        <intro>Full Stack Developer</intro>
      </h1>
      <h2>
        <img
          src={icon_LinkedIn}
          className="headerIcon"
          alt="LinkedIn icon"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/nicholas-valente-electrics/",
              "_blank"
            );
          }}
        />
        <img
          src={icon_Github}
          className="headerIcon"
          alt="Github icon"
          onClick={() => {
            window.open("https://github.com/Ice-and-Rock", "_blank");
          }}
        />
        <img
          src={icon_email}
          className="headerIcon"
          alt="Email icon"
          onClick={() => {
            window.open("mailto:nvalente.electrics@gmail.com", "_blank");
          }}
        />

        <a
          href="https://wa.me/1234567890?text=Hello%20there!"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClickWhatsapp}
        >
          <img src={icon_Whatsapp} className="headerIcon" alt="Whatsapp icon" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=847380014"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClickFacebook}
        >
          <img src={icon_facebook} className="headerIcon" alt="Facebook icon" />
        </a>
      </h2>
    </div>
  );
}

export default Header;
