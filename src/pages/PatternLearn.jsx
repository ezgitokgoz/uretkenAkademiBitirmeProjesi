import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PatternLearn() {
  return (
    <>
      <Navbar />
      <div className="container ">
        <div className="card m-3" style={{ backgroundColor: "#F2F1EB" }}>
          <img
            src="https://images.unsplash.com/photo-1588676000557-dc67e2d3bd19?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="card-img-top"
            alt="..."
            style={{ maxWidth: "1400px", height: "13rem", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">
              Örgü Örmeye Başlamak: Temel Bilgiler ve İpuçları
            </h5>
            <br />
            <p className="card-text">
              Örgü, binlerce yıldır var olan eski bir el sanatıdır ve günümüzde
              hala popülerliğini koruyan bir hobidir. Sıcak battaniyeler,
              yumuşak hırkalar ve zarif atkılar örmek, sadece pratik eşyalar
              üretmekle kalmaz, aynı zamanda yaratıcılığınızı ifade etmenin
              harika bir yolunu sunar. Başlamak için ihtiyacınız olan temel
              araçlar, örgü iğneleri ve renkli ipliklerdir. İlk adımlarınızı
              atarken, düz örgü ve ters örgü gibi temel dikişleri öğrenmek
              önemlidir. Bu basit teknikler, daha karmaşık desenleri anlamanıza
              ve ilerlemenize yardımcı olacaktır. İlk projenizi seçerken,
              atkılar, bere veya basit bir kare battaniye gibi küçük projelerle
              başlamak genellikle önerilir. Bu projeler, temel dikişleri
              pekiştirmenize ve örgüdeki hataları düzeltme becerilerinizi
              geliştirmenize yardımcı olacaktır. Ayrıca, internet üzerindeki
              örgü toplulukları ve video platformları, örgü teknikleri ve
              desenleri hakkında eğitici kaynaklar sunar. Bu videolar, adım adım
              yönergelerle öğrenmeyi kolaylaştırarak sizin için rehberlik
              edebilir. İlham almak için Pinterest veya Instagram gibi sosyal
              medya platformlarına göz atabilir ve diğer örgü severlerin
              paylaşımlarını keşfedebilirsiniz. Örgü projeleri genellikle renkli
              ve çeşitli desenlere sahiptir, bu da kişisel tarzınızı ifade etme
              şansı sunar. Ayrıca, yerel örgü gruplarına katılarak,
              tecrübelerinizi paylaşabilir, yeni teknikler öğrenebilir ve
              örgüyle ilgili sorularınıza cevap bulabilirsiniz. Örgü, sadece bir
              hobi değil, aynı zamanda stresi azaltan, yaratıcılığı teşvik eden
              ve keyifli bir zaman geçirme yöntemidir. Yavaş yavaş ilerleyin,
              hatalarınızdan öğrenin ve kendi el yapımı eserlerinizi ortaya
              çıkararak bu meditatif aktivitenin tadını çıkarın.
              <br />
              <br />
              Örgü, binlerce yıldır var olan eski bir el sanatıdır ve günümüzde
              hala popülerliğini koruyan bir hobidir. Sıcak battaniyeler,
              yumuşak hırkalar ve zarif atkılar örmek, sadece pratik eşyalar
              üretmekle kalmaz, aynı zamanda yaratıcılığınızı ifade etmenin
              harika bir yolunu sunar. Başlamak için ihtiyacınız olan temel
              araçlar, örgü iğneleri ve renkli ipliklerdir. İlk adımlarınızı
              atarken, düz örgü ve ters örgü gibi temel dikişleri öğrenmek
              önemlidir. Bu basit teknikler, daha karmaşık desenleri anlamanıza
              ve ilerlemenize yardımcı olacaktır. İlk projenizi seçerken,
              atkılar, bere veya basit bir kare battaniye gibi küçük projelerle
              başlamak genellikle önerilir. Bu projeler, temel dikişleri
              pekiştirmenize ve örgüdeki hataları düzeltme becerilerinizi
              geliştirmenize yardımcı olacaktır. Ayrıca, internet üzerindeki
              örgü toplulukları ve video platformları, örgü teknikleri ve
              desenleri hakkında eğitici kaynaklar sunar. Bu videolar, adım adım
              yönergelerle öğrenmeyi kolaylaştırarak sizin için rehberlik
              edebilir. İlham almak için Pinterest veya Instagram gibi sosyal
              medya platformlarına göz atabilir ve diğer örgü severlerin
              paylaşımlarını keşfedebilirsiniz. Örgü projeleri genellikle renkli
              ve çeşitli desenlere sahiptir, bu da kişisel tarzınızı ifade etme
              şansı sunar. Ayrıca, yerel örgü gruplarına katılarak,
              tecrübelerinizi paylaşabilir, yeni teknikler öğrenebilir ve
              örgüyle ilgili sorularınıza cevap bulabilirsiniz. Örgü, sadece bir
              hobi değil, aynı zamanda stresi azaltan, yaratıcılığı teşvik eden
              ve keyifli bir zaman geçirme yöntemidir. Yavaş yavaş ilerleyin,
              hatalarınızdan öğrenin ve kendi el yapımı eserlerinizi ortaya
              çıkararak bu meditatif aktivitenin tadını çıkarın.
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>

        <div className="container d-flex align-items-center justify-content-center">
          <a href="#" class="btn " style={{ backgroundColor: "#82ba8e" }}>
            Daha Fazla Öğren
          </a>
        </div>

        <h4 className="px-4 py-5 pb-2 border-bottom">
          Aldığımız Geri Dönüşler
        </h4>
        <div className="card-group m-4">
          <div className="card"style={{ backgroundColor: "#F2F1EB" }}>
            <video controls autoPlay style={{ width: "27rem", height: "18rem", objectFit: "cover" }}>
              <source src="/videos/knitVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="card-body">
              <h5 className="card-title">Zeynep T.</h5>
              <p className="card-text">
                MER & ÖR platformu sayesinde örgü öğrenmek inanılmaz keyifli bir
                deneyim oldu. Video dersler çok açıklayıcı ve adım adım
                rehberlik ediyor. Şimdi özgün tasarımlar yapabiliyorum!
              </p>
            </div>
            <div className="card-footer" >
              <small className="text-body-secondary">
                3 ay önce
              </small>
            </div>
          </div>
          <div className="card" style={{ backgroundColor: "#F2F1EB" }}>
          <video controls autoPlay style={{ width: "27rem", height: "18rem", objectFit: "cover" }}>
              <source src="/videos/knitVideo2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="card-body">
              <h5 className="card-title">Ahmet K.</h5>
              <p className="card-text">
                Örgüye tamamen sıfırdan başlamama rağmen, MER & ÖR'ün basit ve
                anlaşılır öğretim metodu sayesinde hızla ilerledim. Öğrenci
                topluluğuyla etkileşimde bulunmak da gerçekten motivasyonumu
                artırıyor.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                5 gün önce
              </small>
            </div>
          </div>
          <div className="card" style={{ backgroundColor: "#F2F1EB" }}>
          <video controls autoPlay style={{ width: "26rem", height: "18rem", objectFit: "cover" }}>
              <source src="/videos/knitVideo3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="card-body">
              <h5 className="card-title">Ayşe N.</h5>
              <p className="card-text">
                "MER & ÖR, örgüye olan ilgimi canlandırdı. Çeşitli teknikleri
                öğrenme ve özgün projeler oluşturma fırsatı buldum. Her
                seviyeden öğrenciye hitap eden geniş bir içerik yelpazesi var.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                2 ay önce
              </small>
            </div>
          </div>
        </div>
      </div>
      <Footer />{" "}
    </>
  );
}

export default PatternLearn;
