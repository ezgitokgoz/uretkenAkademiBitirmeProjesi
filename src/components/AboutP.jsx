import React from "react";

function AboutP() {
  return (
    <>
      <div className="container px-4 py-5">
        <h2 className="text-sm-start m-3 fs-3 pb-2 border-bottom">Biz Kimiz?</h2>

        <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <div className="col d-flex flex-column align-items-start gap-2">
            <h2 className="fw-bold text-body-emphasis">
              Merhaba MER & ÖR üyesi!
            </h2>
            <p className="text-body-secondary">
              Biz, Mer-Ör ailesi olarak örgüyü bir yaşam tarzı haline getiren öncelikle gençleri hedef alarak
              herkesi bir araya getiren bir platformuz. Sevgiyle dokunduğumuz
              her örgü, özel bir hikaye taşır ve biz, bu hikayeleri bir araya
              getirerek harika bir örgü topluluğu oluşturmak için buradayız.<br/><br/>

              Sende bu ekibin bir parçası olmak için kayıt olmayı unutma!
            </p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <button className="btn" style={{width:"110px", backgroundColor: "#82ba8e" }} type="button">Kayıt Ol</button>
          </div>
          </div>

          <div className="col rounded-3">
            <div className="row row-cols-1 row-cols-sm-2 g-4">
              <div className="col d-flex  flex-column gap-2">
                <div
                  className="container rounded p-4 d-flex align-items-center justify-content-center"
                  style={{
                    marginLeft: "0",
                    backgroundColor: "#82ba8e86",
                    width: "30px",
                    height: "30px",
                  }}
                >
                  <i className="bi bi-bag-heart-fill "></i>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">
                  Düşük Komisyonlu Satış Platformu
                </h4>
                <p className="text-body-secondary">
                  Mer-Ör, emekleri değerlendirmek için bir
                  fırsat sunuyor. Kendi örgülerinizi satabilir
                  ve geniş bir kitleye ulaşabilirsiniz. Komisyonlarımızı
                  minimumda tutarak, yaratıcı emeğinizi desteklemeyi
                  amaçlıyoruz.
                </p>
              </div>

              <div className="col d-flex  flex-column gap-2">
                <div
                  className="container rounded p-4 d-flex align-items-center justify-content-center"
                  style={{
                    marginLeft: "0",
                    backgroundColor: "#82ba8e86",
                    width: "30px",
                    height: "30px",
                  }}
                >
                  <i className="bi bi-people-fill "></i>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">
                  Topluluk İşbirliği ve Workshopları
                </h4>
                <p className="text-body-secondary">
                  Haftada bir düzenlediğimiz atölyelerle örgü tutkunları bir araya
                  geliyor, fikir alışverişinde bulunuyor ve yeni teknikler
                  öğreniyor. Sadece örgü değil, dostluklar da burada
                  şekilleniyor.
                </p>
              </div>

              <div className="col d-flex  flex-column gap-2">
                <div
                  className="container rounded p-4 d-flex align-items-center justify-content-center"
                  style={{
                    marginLeft: "0",
                    backgroundColor: "#82ba8e86",
                    width: "30px",
                    height: "30px",
                  }}
                >
                  <i className="bi bi-file-earmark-text-fill "></i>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">
                  Kullanıcı Dostu Tarifler ve Rehberler
                </h4>
                <p className="text-body-secondary">
                  Her seviyeden örgü tutkunu için adım adım tarifler ve ipuçları
                  sunuyoruz. Başlangıç seviyesinden ileri düzeye kadar herkes
                  için bir şeyler var.
                </p>
              </div>

              <div className="col d-flex  flex-column gap-2">
                <div
                  className="container rounded p-4 d-flex align-items-center justify-content-center"
                  style={{
                    marginLeft: "0",
                    backgroundColor: "#82ba8e86",
                    width: "30px",
                    height: "30px",
                  }}
                >
                  <i className="bi bi-emoji-smile-fill "></i>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">
                  Özgün Tasarımlar
                </h4>
                <p className="text-body-secondary">
                  Mer-Ör, özgünlüğe değer verir. Burada bulacağınız her örgü,
                  biricik bir dokunuş taşır. Hem klasik modeller hem de yeni
                  trendlerle dolu geniş bir koleksiyona sahibiz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutP;
