import React from "react";
import { Link } from "react-router-dom";
import Classes from "./Header.module.css";
import img1 from "../../Image/header/topoffers.webp";
import img2 from "../../Image/header/grocery.webp";
import img3 from "../../Image/header/mobile.webp";
import img4 from "../../Image/header/fashion.webp";
import img5 from "../../Image/header/electronic.webp";
import img6 from "../../Image/header/home.webp";
import img7 from "../../Image/header/appliances.webp";
import img8 from "../../Image/header/travel.webp";
import img9 from "../../Image/header/toys.webp";
import img10 from "../../Image/header/electricvichels.webp";

const Header = () => {
  return (
    <div className={Classes.container}>
      <div className={Classes.subContainer}>
        <div className={Classes.subsubContainer}>
          <Link to="/products/topoffers" style={{ textDecoration: "none" }}>
            <div>
              <img src={img1} alt="top-offers"></img>
            </div>
            <h6>Top Offers</h6>
          </Link>
        </div>
        <div className={Classes.subsubContainer}>
          <Link to="/products/grocery" style={{ textDecoration: "none" }}>
            <div>
              <img src={img2} alt="grocery" />
            </div>
            <h6>Grocery</h6>
          </Link>
        </div>
        <div className={Classes.subsubContainer}>
          <Link to="/products/mobiles" style={{ textDecoration: "none" }}>
            <div>
              <img src={img3} alt="mobiles"></img>
            </div>
            <h6>Mobiles</h6>
          </Link>
        </div>
        <div className={Classes.subsubContainer}>
          <Link to="/products/fashion" style={{ textDecoration: "none" }}>
            <div>
              <img src={img4} alt="fashion"></img>
            </div>
            <h6>Fashion</h6>
          </Link>
        </div>
        <div className={Classes.subsubContainer}>
          <Link to="/products/electronic" style={{ textDecoration: "none" }}>
            <div>
              <img src={img5} alt="electronic"></img>
            </div>
            <h6>Electronics</h6>
          </Link>
        </div>
        <div className={Classes.subsubContainer}>
          <Link to="/products/home" style={{ textDecoration: "none" }}>
            <div>
              <img src={img6} alt="home"></img>
            </div>
            <h6>Home</h6>
          </Link>
        </div>
        <div className={Classes.subsubContainer}>
          <Link to="/products/appliances" style={{ textDecoration: "none" }}>
            <div>
              <img src={img7} alt="appliances"></img>
            </div>
            <h6>Appliances</h6>
          </Link>
        </div>
        <div className={Classes.subsubContainer}>
          <Link to="/products/travel" style={{ textDecoration: "none" }}>
            <div>
              <img src={img8} alt="travel"></img>
            </div>
            <h6>Travel</h6>
          </Link>
        </div>
        <div className={Classes.subsubContainer}>
          <Link to="/products/beauty" style={{ textDecoration: "none" }}>
            <div>
              <img src={img9} alt="Beauty, Toys & More"></img>
            </div>
            <h6>Beauty, Toys & More</h6>
          </Link>
        </div>
        <div className={Classes.subsubContainer}>
          <Link to="/products/2wheelers" style={{ textDecoration: "none" }}>
            <div>
              <img src={img10} alt="Electric 2-Wheelers"></img>
            </div>
            <h6>Electric 2-Wheelers</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
