import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import prod from './productsCategories.json';
import { useCategory } from '../CategoryContext';

const SubCategories = () => {
  const { category } = useParams();
  const { selectedCategory, setSelectedCategory } = useCategory();

  useEffect(() => {
    setSelectedCategory(category);
  }, [category, setSelectedCategory]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = prod.filter((item) => item.category === selectedCategory);
      console.log("Filtrelenen urunler:", filtered);
      setFilteredProducts(filtered);
    } else {
      console.log("Kategori yok, hepsi");
      //setFilteredProducts(prod);
    }
  }, [selectedCategory]);

  return (
    <>
      <Navbar />
      <div className="container px-4 py-5">
        <h2 className="text-sm-start m-3 fs-3 pb-2 border-bottom">
          Tarifler
        </h2>

        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="card m-3"
            style={{ maxWidth: "1400px", backgroundColor: "#F2F1EB" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={item.img}
                  className="img-fluid rounded-start"
                  alt="..."
                  style={{
                    width: "18rem",
                    height: "13rem",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.desc}</p>

                  <p className="card-text">
                    <small className="text-body-secondary">{item.date}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default SubCategories;
