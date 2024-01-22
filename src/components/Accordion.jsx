import { Collapse } from "bootstrap";
import React, { useEffect } from "react";
import "./CAccordion.css";

function Accordion() {
  useEffect(() => {
    // Sayfa yüklendiğinde Collapse bileşenini etkinleştirme
    var collapseElementList = [].slice.call(
      document.querySelectorAll(".accordion-collapse")
    );
    var collapseList = collapseElementList.map(function (collapseEl) {
      return new Collapse(collapseEl, { toggle: false });
    });
  }, []);

  return (
    <>
      <style>
        {`
          .accordion-button {
          background-color: #efefef84;}
  
          .accordion-button:not(.collapsed) {
          background-color: #82ba8e;}

          .accordion-button:focus {
            box-shadow: 0 0 0 0.25rem  #82ba8e;
       `}
        .
      </style>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Mer-Ör nedir ve ne amaçla kurulmuştur?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              Mer-Ör, örgüyü bir yaşam tarzı haline getiren gençleri hedefleyen
              bir platformdur. Örgü tutkunlarını bir araya getirerek özel
              hikayeleri paylaşmak, topluluk oluşturmak ve emeği değerlendirmek
              amacıyla kurulmuştur.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Satış platformu nasıl işliyor ve komisyonlar nasıl belirleniyor?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              Mer-Ör, örgü tutkunlarının kendi örgülerini satabilecekleri bir{" "}
              <strong>%8</strong> komisyonlu satış platformu sunmaktadır.
              Komisyonlar minimumda tutularak, yaratıcı emeği desteklemeyi
              hedeflemektedir. Bu sayede, %8 komisyon uygulandığında satış
              gelirinin %92'si doğrudan satıcıya gitmekte,%8 komisyonun yarısı
              ise <strong>sokak hayvanlarının beslenmesine </strong>
              bağışlanmaktadır.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Topluluk işbirliği ve atölye çalışmaları nasıl organize ediliyor?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              Haftada bir düzenlenen atölyelerle Mer-Ör topluluğu bir araya
              gelir, fikir alışverişinde bulunur ve yeni teknikler öğrenir. Bu
              etkinlikler sadece örgü değil, aynı zamanda dostlukların da
              şekillendiği bir platform sunar.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accordion;
