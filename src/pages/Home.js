import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/web.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> waggy </h1>
        <p> Where being the pet is just Best!</p>
        <Link to="/menu">
          <button> PET STORE</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
