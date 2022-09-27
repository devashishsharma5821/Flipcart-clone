import React from "react";
import classes from "./Carousel.module.css";
import { Link } from "react-router-dom";
import Card from "./Card";

const Carousel = (props) => {
  let path = `/products/${props.data[0].category}`;
  return (
    <div className={classes.maincontainer}>
      <div className={classes.maincontaineritem1}>
        <div className={classes.mainsubcontaineritem1}>
          <h4>{props.head}</h4>
          <p>{props.head}</p>
        </div>
        <div className={classes.mainsubcontaineritem2}>
          <Link to={path} style={{ textDecoration: "none" }}>
            <button>VIEW ALL</button>
          </Link>
        </div>
      </div>
      <div className={classes.maincontaineritem2}>
        <Card data={props.data[0]} />
        <Card data={props.data[1]} />
        <Card data={props.data[2]} />
        <Card data={props.data[3]} />
        <Card data={props.data[4]} />
        <Card data={props.data[5]} />
      </div>
    </div>
  );
};

export default Carousel;
