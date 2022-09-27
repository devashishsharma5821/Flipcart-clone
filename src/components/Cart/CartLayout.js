import React from "react";
import { Link } from "react-router-dom";
import classes from "./CartLayout.module.css";

const CartLayout = (props) => {
  const image = props.image;
  const text = props.text;
  let path;
  if (text === "cart") {
    path = "/";
  } else {
    path = "/products/grocery";
  }
  return (
    <>
      <img className={classes.image} src={image} alt={text} />
      <div className={classes.heading1}>Your {text} is empty!</div>
      <div className={classes.heading2}>Add items to it now.</div>
      <Link to={path}>
        <button>Shop now</button>
      </Link>
    </>
  );
};
export default CartLayout;
