import React from "react";
import Header from "../components/Header/Header.js";
import image1 from "../Image/carousel/image1.webp";
import image2 from "../Image/carousel/image2.webp";
import image3 from "../Image/carousel/image3.webp";
import image4 from "../Image/carousel/image4.webp";
import Carousel from "../components/Carousel/Carousel.js";
import carousels from "../Data/carousels.json";
import "./Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide contain"
        data-bs-touch="false"
        data-bs-interval="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="image1" />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="image2" />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="image3" />
          </div>
          <div className="carousel-item">
            <img src={image4} className="d-block w-100" alt="image4" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {carousels.map((carousel, index) => {
        return <Carousel key={index} head={carousel[0].head} data={carousel} />;
      })}
    </React.Fragment>
  );
};

export default Home;
