import React from "react";
import waggys from "../assets/waggys.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${waggys})` }}></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Long before the stores, the spas and the website, even before that tiny spark of an idea
          came to be, there was love. The kind of love you can only share with a pet. The kind of
          love that makes us family.
        </p>
        <p>
          Hi!
          <br />
          We’re WAGGY A little about us
        </p>
        <p>
          As pet parents ourselves, we want to help every pet parent and their pet meet all their
          needs through our innovative products and services. Our hope is that we can play a
          meaningful role in bringing pets and their humans closer to each other for years and years
          to come, and through that build a kinder world.
        </p>
      </div>
    </div>
  );
}

export default About;
