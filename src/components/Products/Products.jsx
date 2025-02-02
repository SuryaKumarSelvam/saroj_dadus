import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosInstance from '../../utils/axiosInstance';

import './Products.css';

const Products = () => {
  const { categoryName, subCategoryName, categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOption, setSortOption] = useState("featured");
  const [selectedWeights, setSelectedWeights] = useState({}); // State for selected weights

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get(
          `/products?subCategory=${categoryId}`
        );
        const data = response.data;

        // Initialize selectedWeights with the first weight for each product
        const initialWeights = {};
        data.forEach(product => {
          const firstWeight = Object.keys(product.quantities)[0];
          initialWeights[product._id] = firstWeight; // Set the first key as the default weight
        });

        setProducts(data);
        setSortedProducts(data);
        setSelectedWeights(initialWeights); // Set initial selected weights
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    setSortOption(selectedSort);

    let sortedArray = [...products];

    switch (selectedSort) {
      case "priceLowHigh":
        sortedArray.sort((a, b) => a.price - b.price);
        break;
      case "priceHighLow":
        sortedArray.sort((a, b) => b.price - a.price);
        break;
      case "aToZ":
        sortedArray.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "zToA":
        sortedArray.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "featured":
      default:
        sortedArray = [...products];
        break;
    }

    setSortedProducts(sortedArray);
  };

  const handleWeightChange = (productId, weight) => {
    setSelectedWeights((prev) => ({
      ...prev,
      [productId]: weight,
    }));
  };
console.log(products)
  return (
    <>
      <div className="banner">
        <div className="banner-image">
          <img src="/assets/img/banner.jpg" alt="Banner" />
        </div>
        <div className="banner-content-product">
          <h1 className="banner-title">{categoryName}</h1>
          <div className="breadcrumb">
            <a href="/">Products</a> <span> / </span> <span>{subCategoryName}</span>
          </div>
        </div>
      </div>

      <div className="filters-section">
        <div className="filters-right">
          <span className="products-count">
            Showing {sortedProducts.length} products
          </span>
        </div>
        <div className="sort-by">
          <label htmlFor="sort">Sort by:</label>
          <select
            id="sort"
            className="sort-dropdown"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="featured">Featured</option>
            <option value="bestSelling">Best selling</option>
            <option value="aToZ">Alphabetically, A-Z</option>
            <option value="zToA">Alphabetically, Z-A</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="product-grid">
        {sortedProducts.map((product) => (
          <div key={product._id} className="product-card">
            <Link to={`/product/${product.name}/${product._id}`}>
            <div className="product-image-wrapper">
              <img
                src={product.images[0]}
                alt={product.name}
                className="product-image image-default"
              />
              <img
                src={product.images[1]}
                alt={`${product.name} Hover`}
                className="product-image image-hover"
              />
            </div>
            </Link>
            <h3>{product.name}</h3>
            <div className="price-with-rate">
            <div className="price-weight">
              <div className="product-price">
                <p className="price">
                  ₹ {product.quantities[selectedWeights[product._id]]}
                </p>
              </div>
            </div>
            <div className="product-weight">
              {Object.entries(product.quantities).map(([weight, price]) => (
                <button
                  className={`weight-button ${
                    selectedWeights[product._id] === weight ? "active" : ""
                  }`}
                  key={weight}
                  onClick={() => handleWeightChange(product._id, weight)}
                >
                  {weight}g
                </button>
              ))}
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
