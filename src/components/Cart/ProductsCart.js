import React from "react";
import classes from "./ProductsCart.module.css";
import ProductsCartItemFrame from "./ProductsCartItemFrame";

const ProductsCart = () => {
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <div className={classes.subContainer1}>
          <div className={classes.subContainer1sub1}>My Cart(3)</div>
          <ProductsCartItemFrame />
          <ProductsCartItemFrame />
          <ProductsCartItemFrame />
          <ProductsCartItemFrame />
          <div className={classes.subContainer1sub2}>
            <button>PLACE ORDER</button>
          </div>
        </div>
        <div className={classes.subContainer2}>
          <div className={classes.subContainer2sub1}>
            <span>PRICE DETAILS</span>
            <div className={classes.subContainer2sub1sub}>
              <div className={classes.subContainer2sub1sub1}>
                <div>Price(2items)</div>
                <span>₹1,33,497</span>
              </div>
              <div className={classes.subContainer2sub1sub2}>
                <div>Delivery Charges</div>
                <span>Free</span>
              </div>
              <div className={classes.subContainer2sub1sub3}>
                <div>Discount</div>
                <span>₹2100</span>
              </div>
              <div className={classes.subContainer2sub1sub4}>
                <div>Total Amount</div>
                <span>210000</span>
              </div>
              <div className={classes.subContainer2sub1sub5}>
                You will save ₹34000 on this order
              </div>
            </div>
            <div className={classes.subContainer2sub2sub}>
              Safe and Secure Payments.Easy returns.100% Authentic products.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductsCart;
