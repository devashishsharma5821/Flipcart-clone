import React from "react";
import classes from "./ProductsCartItemFrame.module.css";
import image1 from "../../Image/HeaderLayoutDetail/image1.png"
import image2 from "../../Image/header/appliances.webp";

const ProductsCartItemFrame = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.subContainer1}>
        <img src={image2} className={classes.subContainer1sub1} />
        <div className={classes.subContainer1sub2}>
            <button className={classes.subcontainer1sub2btn1}>-</button>
            <button className={classes.subcontainer1sub2btn2}>1</button>
            <button className={classes.subcontainer1sub2btn3}>+</button>
        </div>
      </div>
      <div className={classes.subContainer2}>
        <p className={classes.subContainer2p1}>AJRO DEAL New Adjustable Single Resistance Tube (M...</p>
        <p className={classes.subContainer2p2}>
            <p>Seller:RetailNet</p>
            <img src={image1}/>
        </p>
        <p className={classes.subContainer2p3}>
            <span className={classes.subContainer2p3s1}>₹166</span>
            <span className={classes.subContainer2p3s2}>₹499</span>
            <span className={classes.subContainer2p3s3}>66% off</span>
        </p>
        <button className={classes.subContainer2p4}>REMOVE</button>
      </div>
    </div>
  );
};

export default ProductsCartItemFrame;
