import React from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../product/ProductCard";
import Pattern from "../components/Pattern";
import Accordion from "../components/Accordion";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import CarouselHeader from "../components/CarouselHeader";
//import Slider from '../components/Slider'

function App() {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <Navbar />
      <CarouselHeader />
      <ProductCard />
      <Pattern />
      <Slider />
      <Accordion />
      <Footer />
    </div>
  );
}

export default App;
