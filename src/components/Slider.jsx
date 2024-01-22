import React from "react";

function Slider() {
  return (
    <>
      <div className="container ">
        {/*<h1 className="text-sm-center fs-2 fw-light"></h1>*/}
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade m-4 shadow-sm "
          style={{ borderRadius: "10px", overflow: "hidden", height:'400px'}}
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="d-block w-100"
                alt="..."
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>İlk buluşmamızda yeni dostluklar kuruldu!</h5>
                <p>
                  Atölyemizde gerçekleştirdiğimiz 'birlikte örüyoruz'
                  workshopumuzda hem çanta örmeyi öğrendik, hem de yeni
                  dostluklar kurduk.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="d-block w-100"
                alt="..."
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Doğa ile iç içe örgü!</h5>
                <p>
                  Hep pirlikte piknik örtülerimiz ile gelip hem piknik yaptık
                  hemde yeni atkı ve hırkalar örmeye başladık.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="d-block w-100"
                alt="..."
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Ekipler oluşturduk!</h5>
                <p>
                  Herkesin ilgi alanına göre ekipler oluşturarak herkesin
                  istediği türde çalışabileceği ortamlar yarattık.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
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
            data-bs-target="#carouselExampleCaptions"
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
    </>
  );
}

export default Slider;
