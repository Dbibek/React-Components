import React from "react";
// import Banner from "./Banner";
import Banner from "./Banner";
import HeaderImage from '../assets/Header-img.png';

const Header = () => {
  return (
    <div className='main-container'>
    <div className="header-container">
      <div className="first-image">
        <img className="img1" src={HeaderImage} alt="header pic" />
      </div>
      <div className="text-container">
        <h1 className="white-text">
          powerfully simple <span> with a</span>
        </h1>
        <h1 className="white-text">
          squeeky clean <span>desgin</span>
        </h1>
        <p>
          Find out how you can offer quick and powerful solutions to your
          customers now!
        </p>
        <button>learn more</button>
      </div>  
       
    </div>
    <Banner />   
    </div>

  );
};
export default Header;
