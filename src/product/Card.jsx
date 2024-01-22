// Card.jsx
import React, { useEffect, useState } from "react";
import { allProducts } from "../data";

const Card = ({
  imageUrl,
  title,
  description,
  price,
  onToggleFavorite,
  onAddToCart,
}) => {
  const [clickCount, setClickCount] = useState(0);
  const [isCardFavorite, setIsCardFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  useEffect(() => {
    // Sayfa yüklendiğinde localStorage'dan favori durumu kontrol et
    const storedFavorite = localStorage.getItem(`favorite_${title}`);
    const storedCart = localStorage.getItem(`cart_${title}`);
    if (storedFavorite !== null) {
      setIsCardFavorite(JSON.parse(storedFavorite));
    }

    if (storedFavorite !== null) {
      setIsInCart(JSON.parse(storedCart));
    }
  }, [title]);

  const handleHeartClick = () => {
    setClickCount(clickCount + 1);
    const newFavoriteState = !isCardFavorite;
    setIsCardFavorite(newFavoriteState);
    localStorage.setItem(`favorite_${title}`, JSON.stringify(newFavoriteState));
    onToggleFavorite && onToggleFavorite(newFavoriteState);
  };

  const handleAddToCartClick = () => {
    setClickCount(clickCount + 1);
    const newCartState = !isInCart;
    setIsInCart(newCartState);
    //const storedCart = localStorage.getItem(`Cart_${title}`);
    //const newCartState = !JSON.parse(storedCart);
    localStorage.setItem(`cart_${title}`, JSON.stringify(newCartState));
    onAddToCart && onAddToCart(newCartState);
  };
  const cartButtonText = isInCart ? "SEPETTEN SİL" : "SEPETE EKLE";
//rgb(255, 185, 197)
  const heartColor = isCardFavorite
    ? "rgb(204, 0, 0)"
    : "rgb(177, 177, 177)";

  return (
    <div className="card m-2 shadow-sm" style={{ width: "18rem",backgroundColor: "#F2F1EB"  }}>
      <img
        src={imageUrl}
        className="card-img-top"
        alt="..."
        style={{ width: "18rem", height: "18rem", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p>{price}</p>
        <div className="d-flex justify-content-between align-items-center">
          <a
            href="#"
            className="btn"
            style={{ backgroundColor: "#82ba8e" }}
            onClick={handleAddToCartClick}
          >
            {cartButtonText}
          </a>
          <a href="#" className="" onClick={handleHeartClick}>
            <i
              id="favIcon"
              className="bi bi-heart-fill"
              style={{
                color: heartColor,
                marginRight: "2px",
                fontSize: "30px",
              }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
