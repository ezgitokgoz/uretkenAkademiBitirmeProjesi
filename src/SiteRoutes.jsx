import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import About from "./pages/About";
import PatternLearn from "./pages/PatternLearn";
import Products from "./pages/Products";
import CartPages from "./pages/CartPages";
import Favories from "./pages/Favories";
import SubCategories from "./pages/SubCategories";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/subcategories" element={<SubCategories />} />
        <Route path="/categoriestarif" element={<PatternLearn />} />
        <Route path="/cart" element={<CartPages />} />
        <Route path="/fav" element={<Favories />} />
        
      </Routes>
  );
}

export default App;
