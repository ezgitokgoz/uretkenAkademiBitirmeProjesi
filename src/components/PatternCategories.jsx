import React from "react";

function PatternCategories() {
  return (
    <>
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="text-sm-start m-3 fs-3 pb-2 border-bottom">Tarif Kategorileri</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  " url('https://i.pinimg.com/564x/1a/12/35/1a1235875b0f4a6480ae687adc875320.jpg') ",
                backgroundBlendMode: "soft-light",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-2 fw-bold">
                  Amigurimi Tarifleri
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="https://logowik.com/content/uploads/images/943_meram_belediyesi_logo.jpg"
                      alt="MER & ÖR"
                      style={{
                        width: "32px",
                        height: "32px",
                        objectFit: "cover",
                      }}
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlink:href="#geo-fill"></use>
                    </svg>
                    <small>Amigurimi</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlink:href="#calendar3"></use>
                    </svg>
                    <small>320 tarif</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  " url('https://images.pexels.com/photos/8732471/pexels-photo-8732471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') ",
                backgroundBlendMode: "soft-light",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-2 fw-bold">
                  Hırka Tarifleri
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="https://logowik.com/content/uploads/images/943_meram_belediyesi_logo.jpg"
                      alt="MER & ÖR"
                      style={{
                        width: "32px",
                        height: "32px",
                        objectFit: "cover",
                      }}
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlink:href="#geo-fill"></use>
                    </svg>
                    <small>Hırka</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlink:href="#calendar3"></use>
                    </svg>
                    <small>214 tarif</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  " url('https://i.pinimg.com/564x/27/d1/49/27d149c73def6b8d5792d2325afb68ca.jpg') ",
                backgroundBlendMode: "soft-light",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-2 fw-bold">
                  Kazak Tarifleri
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="https://logowik.com/content/uploads/images/943_meram_belediyesi_logo.jpg"
                      alt="MER & ÖR"
                      style={{
                        width: "32px",
                        height: "32px",
                        objectFit: "cover",
                      }}
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlink:href="#geo-fill"></use>
                    </svg>
                    <small>Kazak</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlink:href="#calendar3"></use>
                    </svg>
                    <small>103 tarif</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  " url('https://images.pexels.com/photos/4846084/pexels-photo-4846084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') ",
                backgroundBlendMode: "soft-light",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-2 fw-bold">
                  Battaniye Tarifleri
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="https://logowik.com/content/uploads/images/943_meram_belediyesi_logo.jpg"
                      alt="MER & ÖR"
                      style={{
                        width: "32px",
                        height: "32px",
                        objectFit: "cover",
                      }}
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlink:href="#geo-fill"></use>
                    </svg>
                    <small>Battaniye</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlink:href="#calendar3"></use>
                    </svg>
                    <small>341 tarif</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatternCategories;
