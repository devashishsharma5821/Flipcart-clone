import React from "react";
import classes from "./ProductsCartItemFrame.module.css";
import image1 from "../../Image/HeaderLayoutDetail/image1.png";
import { useDispatch } from "react-redux";
import { CartAction } from "../../Store";

const ProductsCartItemFrame = ({ img, id, title, brand, amount, quantity }) => {
  const dispatch = useDispatch();

  const removeFromCartHandler = (id, amount) => {
    dispatch(CartAction.removeItemsFromCart({ id, amount }));
  };

  const removeWholeFromCartHandler = (id, amount) => {
    dispatch(CartAction.removeWholeItems({ id, amount }));
  };

  const addToCartHandler = (item) => {
    dispatch(CartAction.addItemsToCart(item));
  };

  return (
    <div className={classes.Container}>
      <div className={classes.subContainer1}>
        <img src={img} className={classes.subContainer1sub1} alt={brand} />
        <div className={classes.subContainer1sub2}>
          <button
            className={classes.subcontainer1sub2btn1}
            onClick={removeFromCartHandler.bind(null, id, amount)}
          >
            -
          </button>
          <button className={classes.subcontainer1sub2btn2}>{quantity}</button>
          <button
            className={classes.subcontainer1sub2btn3}
            onClick={addToCartHandler.bind(null, {
              img,
              id,
              title,
              brand,
              amount,
            })}
          >
            +
          </button>
        </div>
      </div>
      <div className={classes.subContainer2}>
        <p className={classes.subContainer2p1}>{title}</p>
        <div className={classes.subContainer2p2}>
          <p>Seller:RetailNet</p>
          <img src={image1} alt={brand} />
        </div>
        <p className={classes.subContainer2p3}>
          <span className={classes.subContainer2p3s1}>₹{amount}</span>
          <span className={classes.subContainer2p3s2}>₹499</span>
          <span className={classes.subContainer2p3s3}>60% off</span>
        </p>
        <button
          className={classes.subContainer2p4}
          onClick={removeWholeFromCartHandler.bind(null, id, amount)}
        >
          REMOVE
        </button>
      </div>
    </div>
  );
};

export default ProductsCartItemFrame;
