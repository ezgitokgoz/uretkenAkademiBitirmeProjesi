// Cart.jsx
import React from "react";
import Card from "../product/Card";
import { allProducts } from "../data";
import styled from "styled-components";
const Cart = () => {
  //const [cartProducts, setCartProducts] = useState([]);

  const cartProducts = allProducts.filter((product) => {
    const storedCart = localStorage.getItem(`cart_${product.title}`);
    return storedCart !== null && JSON.parse(storedCart);
  });

  const totalAmount = cartProducts.reduce(
    (acc, product) => acc + parseFloat(product.price),
    0
  );

  

  return (
    <>
    
    <div className="container px-4 py-5">
      <h2 className="text-sm-start m-3 fs-3 pb-2 border-bottom">Sepet</h2>
      <div
        style={{
          display: "flex",
          //justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {cartProducts.map((product, index) => (
          <Card
            key={index}
            imageUrl={product.imageUrl}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div
          class="card d-flex align-items-center justify-content-center m-3 shadow-sm"
          style={{ width: "36rem", backgroundColor: "#F2F1EB" }}
        >
          <div class="card-body">
            <h5 class="card-title">ÖDEME</h5>
            <ul className="list-unstyled">
              {cartProducts.map((product, index) => (
                <li key={index}>
                  {product.title}: {product.price}
                </li>
              ))}
            </ul>
            <p class="card-text"><strong>Toplam Fiyat: {totalAmount} TL </strong> </p>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">
                Hediye Paketi Ekle
                
              </label>
            </div>
                <br/>
            <a href="#" class="btn " style={{ backgroundColor: "#82ba8e" }}>
              Satın Al
            </a>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default Cart;
