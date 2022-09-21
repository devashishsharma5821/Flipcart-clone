import React from "react";
import classes from "./Footer.module.css";
import image1 from "../../Image/footer/image1.svg";
import image2 from "../../Image/footer/image2.svg";
import image3 from "../../Image/footer/image3.svg";
import image4 from "../../Image/footer/image4.svg";
import image5 from "../../Image/footer/image5.svg";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.subContainer1}>
        <div className={classes.subsubContainer1}>
          <div>ABOUT</div>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Carriers</p>
          <p>Flipkart Stories</p>
          <p>Press</p>
          <p>Flipkart Wholesale</p>
          <p>Corporate Information</p>
        </div>
        <div className={classes.subsubContainer1}>
          <div>HELP</div>
          <p>Payments</p>
          <p>Shipping</p>
          <p>Cancellation &</p>
          <p>Return</p>
          <p>FAQ</p>
          <p>Report</p>
          <p>Infringement</p>
        </div>
        <div className={classes.subsubContainer1}>
          <div>POLICY</div>
          <p>Return policy</p>
          <p>Terms Of use</p>
          <p>Security</p>
          <p>Privacy</p>
          <p>Sitemap</p>
          <p>EPR Compliance</p>
        </div>
        <div className={classes.subsubContainer1}>
          <div>SOCIAL</div>
          <p>Facebook</p>
          <p>twitter</p>
          <p>YouTube</p>
        </div>
        <div className={classes.subsubContainer1}>
          <div>Mail-Us:</div>
          <p>Flipkart internet Private Limited,</p>
          <p>Buildings Alyssa, Begonia &</p>
          <p>Clove Embassy Tech Village,</p>
          <p>Outer Ring Road, Devarabeesanahalli Village,</p>
          <p>Bengaluru, 560103,</p>
          <p>Karnataka, India</p>
        </div>
        <div className={classes.subsubContainer1}>
          <div>Registered Office Address:</div>
          <p>Flipkart Internet Private Limited,</p>
          <p>Buildings Alyssa, Begonia &</p>
          <p>Clove Embassy Tech Village,</p>
          <p>Outer Ring Road, Devarabeesanahalli Village,</p>
          <p>Bengaluru, 560103,</p>
          <p>Karnataka, India</p>
          <p>CIN : U51109KA2012PTC066107</p>
          <p>Telephone: 044-45614700</p>
        </div>
      </div>
      <div className={classes.subContainer2}>
        <div className={classes.subsubContainer2}>
          <div>
            <img src={image1} alt="image1" />
            <span>Become a seller</span>
          </div>
          <div>
            <img src={image2} alt="image2" />
            <span>Advertise</span>
          </div>
          <div>
            <img src={image3} alt="image3" />
            <span>Gift Card</span>
          </div>
          <div>
            <img src={image4} alt="image4" />
            <span>Help center</span>
          </div>
          <span>© 2007-2022 Flipkart.com</span>
          <img src={image5} alt="image5" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
