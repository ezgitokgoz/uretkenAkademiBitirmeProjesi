import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CategoriesB() {
  return (
    <>
      <Navbar />
      <div className="container px-4 py-5" >
        <h2 className="text-sm-start m-3 fs-3 pb-2 border-bottom" >Battaniye Tarifleri</h2>
        <div className="card m-3" style={{ maxWidth: "1400px", backgroundColor: "#F2F1EB"  }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://i.pinimg.com/564x/b3/e1/ca/b3e1cada11e29ce6d7671e648012ed31.jpg"
                className="img-fluid rounded-start"
                alt="..."
                style={{ width: "18rem", height: "13rem", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Mavi Battaniye Tarifi</h5>
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
                src="https://i.pinimg.com/736x/62/49/21/6249216a75d6bc656a10a53d157f737b.jpg"
                className="img-fluid rounded-start"
                alt="..."
                style={{ width: "18rem", height: "13rem", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Çizgili Battaniye Tarifi</h5>
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
                src="https://i.pinimg.com/564x/fd/ba/4a/fdba4ad91e1ca61bb02fb8d66e9eb88c.jpg"
                className="img-fluid rounded-start"
                alt="..."
                style={{ width: "18rem", height: "13rem", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Pembe Battaniye Tarifi</h5>
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
                src="https://i.pinimg.com/564x/a5/8a/40/a58a40c18a36fa8306407e0f76df5898.jpg"
                className="img-fluid rounded-start"
                alt="..."
                style={{ width: "18rem", height: "13rem", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Yeşil Battaniye Tarifi</h5>
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

export default CategoriesB;
