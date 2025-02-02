import React, { useState,useEffect } from 'react'
import axiosInstance from '../../utils/axiosInstance';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from 'swiper/modules';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const ProductCardSlider = ({subcategoryId}) => {
    console.log(subcategoryId)
    const [products,setProducts] = useState([]);
      const [selectedWeights, setSelectedWeights] = useState({}); 
    

  useEffect(() => {
  if (!subcategoryId) return; // Exit if subcategoryId is undefined

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get(
        `/products?subCategory=${subcategoryId}`
      );
      const data = response.data;

      const initialWeights = {};
      data.forEach(product => {
        const firstWeight = Object.keys(product.quantities)[0];
        initialWeights[product._id] = firstWeight; 
      });

      setProducts(data);
      setSelectedWeights(initialWeights);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  fetchProducts();
}, [subcategoryId]);

console.log(products)


  const handleWeightChange = (productId, weight) => {
    setSelectedWeights((prev) => ({
      ...prev,
      [productId]: weight,
    }));
  };
  return (
     <div className="bestsellers-container">
        <div className="bestsellers-header">
          <h2>Best Sellers</h2>
          <p>You might also like these</p>
        </div>

            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={4}
              breakpoints={{
                340:{slidesPerView:1},
                640: { slidesPerView: 2 }, // 1 slide on small screens
                768: { slidesPerView: 2 }, // 2 slides on tablets
                1024: { slidesPerView: 4 }, // 4 slides on desktops
              }}
            >

            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="product-card">
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
                  <h3>{product.name}</h3>
                  <div className="price-weight">
                  <div className="product-price">
                  <p className="price">{product.price}</p>
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
                  <p className="shelf-life">Shelf Life: {product.shelfLife}</p>
                  <button className="availability-button">
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-navigation">
            <button className="custom-prev">
              <FiArrowLeft size={20} />
            </button>
            <button className="custom-next">
              <FiArrowRight size={20} />
            </button>
          </div>
      </div>
  )
}

export default ProductCardSlider