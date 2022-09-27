import React from "react";
import classes from "./LoginModal.module.css";

const LoginModal = ({ open, setModalOpen }) => {
  const modalDisplayHandler = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div
        className={open ? classes.backdrop : classes.displayhidden}
        onClick={modalDisplayHandler}
      ></div>
      {/* <div className={classes.modalContainer}> */}
      <div className={open ? classes.modal : classes.displayhidden}>
        <div className={classes.modalContainer1}>
          <h5>Login</h5>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        </div>
        <div className={classes.modalContainer2}>
          <form>
            <input type="text" placeholder="Enter Email/Mobile number"></input>
            <input type="text" placeholder="Enter Password"></input>
            <p>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </p>
            <button>Login</button>
          </form>
          <h6>New to Flipkart? Create an account</h6>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default LoginModal;
