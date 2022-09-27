import React from "react";
import { Link } from "react-router-dom";
import classes from "./Card.module.css";

const Card = (props) => {
  let path = `/products/${props.data.category}`;
  return (
    <div className={classes.mainsubContaineritem2}>
      <Link to={path} style={{ textDecoration: "none" }}>
        <div className={classes.maincontaineritem2img}>
          <img src={props.data.img} alt={props.data.Brand} />
        </div>
        <div className={classes.maincontaineritem2h1}>{props.data.title}</div>
        <div className={classes.maincontaineritem2h2}>{props.data.price}</div>
        <div className={classes.maincontaineritem2h3}>{props.data.Brand}</div>
      </Link>
    </div>
  );
};

export default Card;
