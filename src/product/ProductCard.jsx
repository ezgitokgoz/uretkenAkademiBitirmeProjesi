import React, { useState } from "react";
import Card from "./Card";
import {allProducts} from '../data'


function ProductCard() {
  const specificProductIds = [1, 2, 3, 4];
  const specificProducts = allProducts.filter((allProducts) => specificProductIds.includes(allProducts.id));

  const popularProductIds = [5,6,7,8];
  const popularProducts = allProducts.filter((allProducts) => popularProductIds.includes(allProducts.id));
  
  return (
    <>
      <div className="container">
        <h1 className="text-sm-start m-3 fs-3 fw-light pb-2 border-bottom"><br/>Öne Çıkan Ürünler</h1>
        
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
           {specificProducts.map((product) => (
            <Card
              key={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
          
        </div>
      </div>

      <div className="container">
        <h1 className="text-sm-start m-3 fs-3 fw-light pb-2 border-bottom">Popüler</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {popularProducts.map((product) => (
            <Card
              key={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
          
        </div>
      </div>
    </>
  );
}

export default ProductCard;
