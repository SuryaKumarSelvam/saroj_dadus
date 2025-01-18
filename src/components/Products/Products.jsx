import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from '../../utils/axiosInstance';

import './Products.css';

const Products = () => {
  const { categoryName, subCategoryName, categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get(
          `/products?category=${categoryId}` // Use categoryId dynamically
        );
        setProducts(response.data); // Assuming response.data is the array of products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  console.log(categoryName,subCategoryName,categoryId)

  return (
    <>
      {/* Banner Section */}
      <div className="banner">
        <div className="banner-image">
          <img src="/assets/img/banner.jpg" alt="Banner" />
        </div>
        <div className="banner-content">
          <h1 className="banner-title">{categoryName}</h1>
          <div className="breadcrumb">
            <a href="/">Home</a> <span> / </span> <span>{subCategoryName}</span>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="filters-section">
        <div className="filters-right">
          <span className="products-count">
            Showing {products.length} products
          </span>
        </div>
        <div className="sort-by">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" className="sort-dropdown">
            <option value="relevance">Relevance</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <div className="product-image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="product-image image-default"
              />
               <img
                  src={product.image}
                  alt={`${product.name} Hover`}
                  className="product-image image-hover"
                />
            </div>
            <h3>{product.name}</h3>
            <div className="price-weight">
              <div className="product-price">
                <p className="price">₹ {product.price}</p>
              </div>
            </div>
            <p className="shelf-life">Rating: {product.rating}</p>
            <button className="availability-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
