import React from "react";
import img1 from "../../assests/homepage/img1.jpg";
import img2 from "../../assests/homepage/img2.jpg";
import img3 from "../../assests/homepage/img3.jpg";
import img4 from "../../assests/homepage/img4.jpg";
import img5 from "../../assests/homepage/img5.jpg";

const HomePageCarousel = () => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={img1}
              className="d-block w-100"
              alt="National Voter Day img"
            />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="Desh Ka Garv img" />
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              className="d-block w-100"
              alt="Lokh Sabha vote img"
            />
          </div>
          <div className="carousel-item">
            <img
              src={img4}
              className="d-block w-100"
              alt="President vote img"
            />
          </div>
          <div className="carousel-item">
            <img
              src={img5}
              className="d-block w-100"
              alt="President vote img"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
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
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomePageCarousel;

