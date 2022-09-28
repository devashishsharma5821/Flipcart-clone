import React from "react";
import classes from "./HeaderLayoutDetail.module.css";
import topoffers from "../../Data/topoffers.json";
import image2 from "../../Image/HeaderLayoutDetail/image1.png";
import image3 from "../../Image/HeaderLayoutDetail/image2.webp";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdFlash } from "react-icons/io";
import { RiSecurePaymentFill } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { CartAction } from "../../Store";
import { useDispatch } from "react-redux";

const HeaderLayoutDetail = () => {
  const params = useParams();

  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    dispatch(CartAction.addItemsToCart(item));
  };

  return (
    <div>
      {topoffers.map((item, index) => {
        if (item.id === params.productDetail) {
          return (
            <div className={classes.container} key={index}>
              <div className={classes.subContainer1}>
                <div className={classes.subsubContainer1}>
                  <div className={classes.subsubimgContainer}>
                    <img src={item.img} alt={index} />
                  </div>
                  <div className={classes.subsubsubContainer}>
                    <button
                      className={classes.subsubsubContainer1}
                      onClick={addToCartHandler.bind(null, item)}
                    >
                      <p>
                        <FaShoppingCart />
                      </p>
                      <span>ADD TO CART</span>
                    </button>
                    <button className={classes.subsubsubContainer2}>
                      <p>
                        <IoMdFlash />
                      </p>
                      <span>BUY NOW</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className={classes.subContainer2}>
                <p className={classes.subContainer2p1}>{item.title}</p>
                <p className={classes.subContainer2p2}>
                  8 Ratings & 1 Reviews{" "}
                  <span>
                    <img src={image2} alt="This is image2" />
                  </span>
                </p>
                <p className={classes.subContainer2p3}>
                  <span className={classes.subContainer2p3s1}>
                    ₹{item.amount}
                  </span>
                  <span className={classes.subContainer2p3s2}>
                    ₹{item.amount * 2}
                  </span>
                  <span className={classes.subContainer2p3s3}>47% off</span>
                </p>
                <p className={classes.subContainer2p4}>Avaliable offer</p>
                <div className={classes.subContainer2p5}>
                  <div className={classes.subContainer2p5p1}>
                    <span>
                      <RiSecurePaymentFill />
                    </span>
                    <div>
                      Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank
                      Credit Card
                    </div>
                  </div>
                  <div className={classes.subContainer2p5p2}>
                    <span>
                      <RiSecurePaymentFill />
                    </span>
                    <div>
                      Bank Offer 10% Off on Bank of Baroda Mastercard debit card
                      first time transaction, Terms and Condition apply
                    </div>
                  </div>
                  <div className={classes.subContainer2p5p3}>
                    <span>
                      <RiSecurePaymentFill />
                    </span>
                    <div>
                      Purchase this Furniture or Appliance and Get Extra ₹500
                      Off on Select ACs
                    </div>
                  </div>
                  <div className={classes.subContainer2p5p4}>
                    <span>
                      <RiSecurePaymentFill />
                    </span>
                    <div>
                      Partner OfferExtra 10% off upto ₹500 on next furniture
                      purchase
                    </div>
                  </div>
                </div>
                <div className={classes.subContainer2p6}>
                  <div>
                    <p className={classes.row1col1}>Delivery</p>
                    <p className={classes.row1col2}>
                      Delivery by Thu Sep 22 2022 | ₹40
                    </p>
                  </div>
                  <div>
                    <p className={classes.row2col1}>Warranty</p>
                    <p className={classes.row2col2}>No Warranty</p>
                  </div>
                  <div>
                    <p className={classes.row3col1}>Seller</p>
                    <div className={classes.row3col2}>
                      <span>SuperComNet</span>
                      <p>GST invoice available</p>
                      <p>View more sellers starting from ₹329</p>
                    </div>
                  </div>
                  <div>
                    <p className={classes.row4col1}>
                      <img src={image3} alt="This is image3" />
                    </p>
                  </div>
                  <div>
                    <p className={classes.row5col1}>Description</p>
                    <p className={classes.row5col2}>
                      This electric kettle from Pigeon will soon become a
                      travelers best friend, a hostelite saviour and an answer
                      to all the midnight cravings. With this handy appliance,
                      you can boil water and use it to make instant noodles,
                      packet soup, coffee and green tea.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default HeaderLayoutDetail;
