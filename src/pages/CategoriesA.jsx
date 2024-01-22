import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CategoriesA() {
  return (
    <>
      <Navbar />
      <div className="container px-4 py-5" >
        <h2 className="text-sm-start m-3 fs-3 pb-2 border-bottom" >Amigurimi Tarifleri</h2>
        <div className="card m-3" style={{ maxWidth: "1400px", backgroundColor: "#F2F1EB"  }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://i.pinimg.com/564x/a6/2c/31/a62c318fc0f528f020761c5b21b7a17c.jpg"
                className="img-fluid rounded-start"
                alt="..."
                style={{ width: "18rem", height: "13rem", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Amigurimi Ördek Tarifi</h5>
                <p className="card-text">
                  Bu amigurumi tarifi kartı için gerekli malzemeler şunlardır:
                  Renkli ipler, uygun bir tığ, dikiş iğneleri, doldurma
                  malzemesi, göz boncukları veya nakış ipliği, ve isteğe bağlı
                  olarak dekoratif unsurlar. Başlamadan önce, magic ring
                  (sihirli halka) yöntemi ile başlayarak amigurumi karakterinin
                  başını oluşturmak için uygun renklerde ipler kullanılır.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    5 gün önce yayınlandı
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card m-3" style={{ maxWidth: "1400px" ,backgroundColor: "#F2F1EB"   }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://i.pinimg.com/564x/28/b8/59/28b859f9a317d37c33b7b748051b2444.jpg"
                className="img-fluid rounded-start"
                alt="..."
                style={{ width: "18rem", height: "13rem", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Amigurimi Tilki Tarifi</h5>
                <p className="card-text">
                  Bu amigurumi tarifi kartı için gerekli malzemeler şunlardır:
                  Renkli ipler, uygun bir tığ, dikiş iğneleri, doldurma
                  malzemesi, göz boncukları veya nakış ipliği, ve isteğe bağlı
                  olarak dekoratif unsurlar. Başlamadan önce, magic ring
                  (sihirli halka) yöntemi ile başlayarak amigurumi karakterinin
                  başını oluşturmak için uygun renklerde ipler kullanılır.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    5 gün önce yayınlandı
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="card m-3" style={{ maxWidth: "1400px" ,backgroundColor: "#F2F1EB"   }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://i.pinimg.com/564x/99/3b/45/993b45a19666ff77cb4dcd338dfc65cb.jpg"
                className="img-fluid rounded-start"
                alt="..."
                style={{ width: "18rem", height: "13rem", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Amigurimi Tavşan Tarifi</h5>
                <p className="card-text">
                  Bu amigurumi tarifi kartı için gerekli malzemeler şunlardır:
                  Renkli ipler, uygun bir tığ, dikiş iğneleri, doldurma
                  malzemesi, göz boncukları veya nakış ipliği, ve isteğe bağlı
                  olarak dekoratif unsurlar. Başlamadan önce, magic ring
                  (sihirli halka) yöntemi ile başlayarak amigurumi karakterinin
                  başını oluşturmak için uygun renklerde ipler kullanılır.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    5 gün önce yayınlandı
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="card m-3" style={{ maxWidth: "1400px" ,backgroundColor: "#F2F1EB"   }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://i.pinimg.com/564x/8f/d7/52/8fd752fbbd6d7ca7cbaf0576e4c4044b.jpg"
                className="img-fluid rounded-start"
                alt="..."
                style={{ width: "18rem", height: "13rem", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Amigurimi İnek Tarifi</h5>
                <p className="card-text">
                  Bu amigurumi tarifi kartı için gerekli malzemeler şunlardır:
                  Renkli ipler, uygun bir tığ, dikiş iğneleri, doldurma
                  malzemesi, göz boncukları veya nakış ipliği, ve isteğe bağlı
                  olarak dekoratif unsurlar. Başlamadan önce, magic ring
                  (sihirli halka) yöntemi ile başlayarak amigurumi karakterinin
                  başını oluşturmak için uygun renklerde ipler kullanılır.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    5 gün önce yayınlandı
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default CategoriesA;
