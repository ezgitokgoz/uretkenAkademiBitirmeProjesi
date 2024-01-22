import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CategoriesH() {
  return (
    <>
      <Navbar />
      <div className="container px-4 py-5" >
        <h2 className="text-sm-start m-3 fs-3 pb-2 border-bottom" >Hırka Tarifleri</h2>
        <div className="card m-3" style={{ maxWidth: "1400px", backgroundColor: "#F2F1EB"  }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://i.pinimg.com/736x/09/2e/92/092e92f36903c950ae204d9245e22099.jpg"
                className="img-fluid rounded-start"
                alt="..."
                style={{ width: "18rem", height: "13rem", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Papatyalı Hırka Tarifi</h5>
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
                src="https://i.pinimg.com/564x/8f/0b/d7/8f0bd74f82fc9b5ce549f72df71ca168.jpg"
                className="img-fluid rounded-start"
                alt="..."
                style={{ width: "18rem", height: "13rem", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Bloklu Hırka Tarifi</h5>
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

export default CategoriesH;
