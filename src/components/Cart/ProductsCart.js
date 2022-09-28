import React from "react";
import classes from "./ProductsCart.module.css";
import ProductsCartItemFrame from "./ProductsCartItemFrame";
import { useSelector } from "react-redux";

const ProductsCart = () => {
  const items = useSelector((state) => state.items);
  const totalAmount = useSelector((state) => state.totalAmount);
  console.log(items);
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <div className={classes.subContainer1}>
          <div className={classes.subContainer1sub1}>
            My Cart({items.length})
          </div>
          {items.map((item, index) => {
            return (
              <ProductsCartItemFrame
                key={index}
                img={item.img}
                price={item.price}
                title={item.title}
                brand={item.brand}
                amount={item.amount}
                id={item.id}
                quantity={item.quantity}
              />
            );
          })}
          <div className={classes.subContainer1sub2}>
            <button>PLACE ORDER</button>
          </div>
        </div>
        <div className={classes.subContainer2}>
          <div className={classes.subContainer2sub1}>
            <span>PRICE DETAILS</span>
            <div className={classes.subContainer2sub1sub}>
              <div className={classes.subContainer2sub1sub1}>
                <div>Price({items.length}items)</div>
                <span>₹{totalAmount}</span>
              </div>
              <div className={classes.subContainer2sub1sub2}>
                <div>Delivery Charges</div>
                <span>{totalAmount < 600 ? "220" : "Free"}</span>
              </div>
              <div className={classes.subContainer2sub1sub3}>
                <div>Discount</div>
                <span>₹{(totalAmount * 12) / 100}</span>
              </div>
              <div className={classes.subContainer2sub1sub4}>
                <div>Total Amount</div>
                <span>
                  {(totalAmount - (totalAmount * 12) / 100).toFixed(2)}
                </span>
              </div>
              <div className={classes.subContainer2sub1sub5}>
                You will get 12% and save ₹{(totalAmount * 12) / 100} on this
                order
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
