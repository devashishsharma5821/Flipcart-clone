import React from "react";
import classes from "./HeaderLayout.module.css";
import { useParams } from "react-router-dom";
import Frame from "./Frame";
import topoffers from "../../Data/topoffers.json";

const HeaderLayout = () => {
  const params = useParams();
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h3>Top Deals</h3>
      </div>
      <div className={classes.subcontainer}>
        {topoffers.map((item, index) => {
          if (item.category === params.productsId) {
            return (
              <Frame
                key={index}
                id={item.id}
                img={item.img}
                Brand={item.Brand}
                price={item.price}
                title={item.title}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default HeaderLayout;
