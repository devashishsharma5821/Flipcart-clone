import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import LoginModal from "../Modal/LoginModal";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const itemsLength = useSelector((state) => state.items.length);

  const loginHandler = () => {
    setModalOpen(true);
  };

  return (
    <>
      <LoginModal open={modalOpen} setModalOpen={setModalOpen} />
      <div className={classes.container}>
        <div className={classes.subContainer1}>
          <div className={classes.sub_Container}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <p className={classes.sub_Container1}>Flipkart</p>
              <p className={classes.sub_Container2}>
                Explore <span>Plus</span>
              </p>
            </Link>
          </div>
        </div>
        <div className={classes.subContainer2}>
          <input
            type="text"
            placeholder="Search for products,brands and more "
          />
          <svg
            style={{ color: "blue" }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              fill="blue"
            ></path>{" "}
          </svg>
        </div>
        <div className={classes.subContainer3}>
          <div className={classes.sub_Container3} onClick={loginHandler}>
            Login
          </div>
        </div>
        <div className={classes.subContainer4}>
          <span>Become a Seller</span>
        </div>
        <div className={classes.subContainer5}>
          <div className={classes.sub_Container5}>
            <div>More</div>
          </div>
        </div>
        <div className={classes.subContainer6}>
          <Link to="/cart/Flipkart">
            <div>
              <p>
                <FaShoppingCart />
                {itemsLength > 0 && <span>{itemsLength}</span>}
              </p>
              <h6>Cart</h6>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
