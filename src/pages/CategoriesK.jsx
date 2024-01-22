import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CategoriesK() {
  return (
    <>
      <Navbar />
      <div className="container px-4 py-5">
        <h2 className="text-sm-start m-3 fs-3 pb-2 border-bottom">Kazak Tarifleri</h2>
        <div className="card m-3" style={{ maxWidth: "1400px", backgroundColor: "#F2F1EB"  }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://i.pinimg.com/564x/0d/2a/05/0d2a05dfa934c3fa56a5b2d53a2bcf61.jpg"
                className="img-fluid rounded-start"
                alt="..."
                style={{ width: "18rem", height: "13rem", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Mavi Çizgili Kazak Tarifi</h5>
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

        <div className="card m-3" style={{ maxWidth: "1400px", backgroundColor: "#F2F1EB"   }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://i.pinimg.com/736x/58/4c/1c/584c1c4e91f988e6ad2440afe9a9744f.jpg"
                className="img-fluid rounded-start"
                alt="..."
                style={{ width: "18rem", height: "13rem", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Pembe Kazak Tarifi</h5>
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

export default CategoriesK;
