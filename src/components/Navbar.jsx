import React from "react";
import ProductCard from "../product/ProductCard";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
        <nav
          className="navbar navbar-expand-lg "
          style={{ backgroundColor: "#EEE7DA" }}
        >
          <div className="container-fluid">
            <Link className="navbar-brand"  to="/">
              MER & ÖR
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="d-flex justify-content-center w-100">
                <nav className="navbar navbar-expand-lg ">
                  <ul className="navbar-nav justify-content-center me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <li>
                        <NavLink className="nav-link" to="/">
                          Anasayfa
                        </NavLink>
                      </li>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/products">
                        Ürünler
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        to="/categories"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Kategoriler
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink
                            className="dropdown-item"
                            to="/categoriesamic"
                            href="#"
                          >
                            Amigurimi Tarifleri
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="dropdown-item"
                            to="/categorieshırka"
                            href="#"
                          >
                            Hırka Tarifleri
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="dropdown-item"
                            to="/categorieskazak"
                            href="#"
                          >
                            Kazak Tarifleri
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="dropdown-item"
                            to="/categoriesbat"
                            href="#"
                          >
                            Battaniye Tarifleri
                          </NavLink>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <NavLink
                            className="dropdown-item"
                            to="/categoriestarif"
                            href="#"
                          >
                            Tarifleri Okumayı Öğren
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">
                        Hakkımızda
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>

              <button className="btn btn-lg navbar-text">
                <NavLink className="nav-link" to="/fav">
                  <i className="bi bi-arrow-through-heart"></i>
                </NavLink>
              </button>
              <button className="btn btn-lg navbar-text">
                <NavLink className="nav-link" to="/cart">
                  <i className="bi bi-cart"></i>
                </NavLink>
              </button>

              <button className="btn btn-lg navbar-text">
                <i className="bi bi-person-gear"></i>
              </button>
            </div>
          </div>
        </nav>
      
    </>
  );
}

export default Navbar;
