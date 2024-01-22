// ProductList.jsx
import React, { useState } from "react";
import Card from "./Card"; // Card bileşenini import ettiğinizden emin olun
import {allProducts} from '../data'
const ProductList = () => {
  return (
    <div className="container px-4 py-5">
      <h2 className="text-sm-start m-3 fs-3 pb-2 border-bottom">Ürünler</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}>
        {allProducts.map((product, index) => (
          <Card 
            key={index}
            id={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
