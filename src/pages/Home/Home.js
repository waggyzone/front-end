import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../../assets/web.jpg";
// import '../../styles/Home.css'
import './index.css'
function Home() {
  
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="home__headerContainer">
        <h1> waggy </h1>
        <p> Where being the pet is just Best!</p>
        <Link to="/store">
          <button className="home__headerContainer__button"> PET STORE</button>
        </Link>
      </div>
    </div>
  );
}

export {Home} ;
