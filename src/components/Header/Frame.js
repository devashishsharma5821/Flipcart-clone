import React from "react";
import { Link } from "react-router-dom";
import classes from "./Frame.module.css";
import { useParams } from "react-router-dom";

export default function Frame(props) {
  const params = useParams();
  let path = `/products/${params.productsId}/${props.id}`;
  return (
    <div className={classes.subcontainer1}>
      <Link to={path} style={{ textDecoration: "none" }}>
        <div>
          <img src={props.img} alt={props.title} />
        </div>
        <p className={classes.brand}>{props.Brand}</p>
        <p className={classes.price}>{props.price}</p>
        <p className={classes.title}>{props.title}</p>
      </Link>
    </div>
  );
}
