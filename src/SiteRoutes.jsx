import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import About from "./pages/About";
import CategoriesAmig from "./pages/CategoriesA";
import CategoriesH from "./pages/CategoriesH";
import CategoriesK from "./pages/CategoriesK";
import CategoriesB from "./pages/CategoriesB";
import PatternLearn from "./pages/PatternLearn";
import Products from "./pages/Products";
import CartPages from "./pages/CartPages";
import Favories from "./pages/Favories";

import ProductList from "./product/ProductList";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/categoriesamic" element={<CategoriesAmig />} />
        <Route path="/categorieshırka" element={<CategoriesH />} />
        <Route path="/categorieskazak" element={<CategoriesK/>} />
        <Route path="/categoriesbat" element={<CategoriesB />} />
        <Route path="/categoriestarif" element={<PatternLearn />} />
        <Route path="/cart" element={<CartPages />} />
        <Route path="/fav" element={<Favories />} />
        
      </Routes>
  );
}

export default App;
