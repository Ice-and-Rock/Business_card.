import React from "react";
import nickHeadshot from "../images/Nick_headhshot.jpeg";
import contactQRCode from "../images/frame-2.png";

// Render Body with the following characteristics:
// all rendered in an element to be grouped in CSS flexbox
// - Headshot ✅
// - upperTitle / upperText ✅
// - lowerTitle / lowerText ✅
// - <p> element containing personal description ✅
// - QR code for contact info ✅

function Body() {
  return (
    <div className="body">
      <upper className="upperBody">
        <img className="headShot" src={nickHeadshot} alt="Nick headshot" />
      </upper>
      <lower className="lowerBody">
        <h1 className="body--upperTitle">Nick Valente</h1>
        <h2 className="body--upperText">Full Stack Developer</h2>
        <h3 className="body--lowerTitle">Hey!</h3>
        <p className="body--lowerText">
          I'm a full stack web developer with a passion for learning and
          creating. I have been running my own electrical company for several
          years and I' am a graduate of the School of Code Full Stack Web
          Development Programme. I'm excited to learn more about web development
          and to continue my career in the Tech industry.
        </p>
        <img
          className="body--QRCode"
          src={contactQRCode}
          alt="Contact QR Code"
        />
      </lower>
    </div>
  );
}

export default Body;
