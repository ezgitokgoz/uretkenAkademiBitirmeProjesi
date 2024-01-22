import React from 'react'

function Footer() {
  return (
    <div style={{ backgroundColor: "#EEE7DA" }}>
<div className="container" >

  <footer className="py-5">
    <div className="row">

      <div className="col-6 col-md-2 mb-3">
        <h5>Bölümler</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Anasayfa</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Ürünler</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Tarifler</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Duyurular</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Hakkımızda</a></li>
        </ul>
      </div>


      <div className="col-md-5 offset-md-5 mb-3">
        <form>
          <h5>Yeni haberler için abone ol!</h5>
          <p>Haftalık workshoplarımızdan ve yayınlanan örgü tariflerinden haberdar ol.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn" style={{width:"110px", backgroundColor: "#82ba8e" }} type="button">Abone Ol</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p className="d-flex text-align-center">© 2024 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
      </ul>
    </div>
  </footer>
</div>
    </div>
  )
}

export default Footer
