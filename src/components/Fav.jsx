// Fav.jsx
import React from "react";
import Card from "../product/Card";
import { allProducts } from "../data";

const Fav = () => {
  const favoriteProducts = allProducts.filter((product) => {
    const storedFavorite = localStorage.getItem(`favorite_${product.title}`);
    return storedFavorite !== null && JSON.parse(storedFavorite);
  });

  return (
    <div className="container px-4 py-5">
      <h2 className="text-sm-start m-3 fs-3 pb-2 border-bottom">Favoriler</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          //justifyContent: "space-between",
        }}
      >
        {favoriteProducts.map((product, index) => (
          <Card
            key={index}
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

export default Fav;
