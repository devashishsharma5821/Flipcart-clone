import React from "react";
import classes from "./Cart.module.css";
import image1 from "../../Image/Cart/image1.webp";
import image2 from "../../Image/Cart/image2.webp";
import { NavLink } from "react-router-dom";
import CartLayout from "./CartLayout";
import { useParams } from "react-router-dom";

const Cart = () => {
  const params = useParams();

  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <div className={classes.subContainer1}>
          <div className={classes.subsubContainer1}>
            <NavLink
              className={(navData) =>
                navData.isActive ? classes.active : classes.notActive
              }
              to="/cart/Flipkart"
            >
              <div className={classes.subsubsubContainer1}>Flipkart</div>
            </NavLink>
          </div>
          <div className={classes.subsubContainer2}>
            <NavLink
              className={(navData) =>
                navData.isActive ? classes.active : classes.notActive
              }
              to="/cart/Grocery"
            >
              <div className={classes.subsubsubContainer2}>Grocery</div>
            </NavLink>
          </div>
        </div>
        <div className={classes.subContainer2}>
          {params.cartItems === "Flipkart" ? (
            <CartLayout image={image1} text="cart" />
          ) : (
            <CartLayout image={image2} text="basket" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
