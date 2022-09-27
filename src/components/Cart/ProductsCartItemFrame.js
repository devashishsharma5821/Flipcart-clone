import React from "react";
import classes from "./ProductsCartItemFrame.module.css";
import image1 from "../../Image/HeaderLayoutDetail/image1.png";
import { useDispatch } from "react-redux";
import { CartAction } from "../../Store";

const ProductsCartItemFrame = ({ img, id, title, brand, amount }) => {
  const dispatch = useDispatch();

  const removeFromCartHandler = () => {
    dispatch(CartAction.removeItemsFromCart(id));
  };

  return (
    <div className={classes.Container}>
      <div className={classes.subContainer1}>
        <img src={img} className={classes.subContainer1sub1} alt={brand} />
        <div className={classes.subContainer1sub2}>
          <button className={classes.subcontainer1sub2btn1}>-</button>
          <button className={classes.subcontainer1sub2btn2}>1</button>
          <button className={classes.subcontainer1sub2btn3}>+</button>
        </div>
      </div>
      <div className={classes.subContainer2}>
        <p className={classes.subContainer2p1}>{title}</p>
        <p className={classes.subContainer2p2}>
          <p>Seller:RetailNet</p>
          <img src={image1} alt={brand} />
        </p>
        <p className={classes.subContainer2p3}>
          <span className={classes.subContainer2p3s1}>₹{amount}</span>
          <span className={classes.subContainer2p3s2}>₹499</span>
          <span className={classes.subContainer2p3s3}>60% off</span>
        </p>
        <button
          className={classes.subContainer2p4}
          onClick={removeFromCartHandler.bind(null,id)}
        >
          REMOVE
        </button>
      </div>
    </div>
  );
};

export default ProductsCartItemFrame;
