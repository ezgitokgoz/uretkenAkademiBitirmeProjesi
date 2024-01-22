import React from "react";

function CarouselHeader() {
  return (
    <>
    <style>
        {`
          .carousel-inner {
            height: 90vh; /* İstediğiniz yükseklik değerini buradan ayarlayabilirsiniz */
          }

          .carousel-inner img {
            object-fit: cover;
            height: 100%;
            width: 100%;
          }
        `}
      </style>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide shadow-sm"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://resmim.net/cdn/2024/01/22/ZxCJJn.jpg"
              className="d-block h-10 w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img src="https://resmim.net/cdn/2024/01/22/ZxCI0j.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://resmim.net/cdn/2024/01/22/ZxCAjR.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
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
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default CarouselHeader;
