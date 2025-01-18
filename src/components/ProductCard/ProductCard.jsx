import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from 'swiper/modules';
import "./ProductCard.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";


const ProductCard = () => {
  const [activeTab, setActiveTab] = useState("Sweets");

  const allProducts = {
    Sweets: [
      {
        name: "Gulab Jamun",
        price: "₹ 250",
        weights:[
          {weight:"250 Gms" , price:550},
          {weight:"500 Gms" , price:1000},
          {weight:"1 Kg" , price:2000},
        ],
        shelfLife: "7 Days",
        image1: "https://dadus.co.in/cdn/shop/files/4_8a44caaa-79d8-4e05-a4fe-5787c30c4939_680x.png?v=1685521023",
        image2: "https://dadus.co.in/cdn/shop/files/MixSweet_Ghee_Khova_500gms-01_680x.jpg?v=1712909808",
      },
      {
        name: "Kaju Katli",
        price: "₹ 550",
        weights:[
          {weight:"250 Gms" , price:550},
          {weight:"500 Gms" , price:1000},
        ],
        shelfLife: "15 Days",
        image1: "https://dadus.co.in/cdn/shop/files/4_8a44caaa-79d8-4e05-a4fe-5787c30c4939_680x.png?v=1685521023",
        image2: "https://dadus.co.in/cdn/shop/files/MixSweet_Ghee_Khova_500gms-01_680x.jpg?v=1712909808",
      },
    ],
    Namkeens: [
      {
        name: "Aloo Bhujia",
        price: "₹ 150",
        weights:[
          {weight:"250 Gms" , price:550},
          {weight:"500 Gms" , price:1000},
        ],
        shelfLife: "30 Days",
        image1: "https://dadus.co.in/cdn/shop/files/4_8a44caaa-79d8-4e05-a4fe-5787c30c4939_680x.png?v=1685521023",
        image2: "https://dadus.co.in/cdn/shop/files/MixSweet_Ghee_Khova_500gms-01_680x.jpg?v=1712909808",
      },
      {
        name: "Moong Dal",
        price: "₹ 180",
        weights:[
          {weight:"250 Gms" , price:550},
          {weight:"500 Gms" , price:1000},
        ],
        shelfLife: "25 Days",
        image1: "https://dadus.co.in/cdn/shop/files/4_8a44caaa-79d8-4e05-a4fe-5787c30c4939_680x.png?v=1685521023",
        image2: "https://dadus.co.in/cdn/shop/files/MixSweet_Ghee_Khova_500gms-01_680x.jpg?v=1712909808",
      },
      {
        name: "Moong Dal",
        price: "₹ 180",
        weights:[
          {weight:"250 Gms" , price:550},
          {weight:"500 Gms" , price:1000},
        ],
        shelfLife: "25 Days",
       image1: "https://dadus.co.in/cdn/shop/files/4_8a44caaa-79d8-4e05-a4fe-5787c30c4939_680x.png?v=1685521023",
        image2: "https://dadus.co.in/cdn/shop/files/MixSweet_Ghee_Khova_500gms-01_680x.jpg?v=1712909808",
      },
      {
        name: "Moong Dal",
        price: "₹ 180",
        weights:[
          {weight:"250 Gms" , price:550},
          {weight:"500 Gms" , price:1000},
        ],
        shelfLife: "25 Days",
        image1: "https://dadus.co.in/cdn/shop/files/4_8a44caaa-79d8-4e05-a4fe-5787c30c4939_680x.png?v=1685521023",
        image2: "https://dadus.co.in/cdn/shop/files/MixSweet_Ghee_Khova_500gms-01_680x.jpg?v=1712909808",
      },
      {
        name: "Moong Dal",
        price: "₹ 180",
        weights:[
          {weight:"250 Gms" , price:550},
          {weight:"500 Gms" , price:1000},
        ],
        shelfLife: "25 Days",
        image1: "https://dadus.co.in/cdn/shop/files/4_8a44caaa-79d8-4e05-a4fe-5787c30c4939_680x.png?v=1685521023",
        image2: "https://dadus.co.in/cdn/shop/files/MixSweet_Ghee_Khova_500gms-01_680x.jpg?v=1712909808",
      },
      {
        name: "Moong Dal",
        price: "₹ 180",
        weights:[
          {weight:"250 Gms" , price:550},
          {weight:"500 Gms" , price:1000},
        ],
        shelfLife: "25 Days",
        image1: "https://dadus.co.in/cdn/shop/files/4_8a44caaa-79d8-4e05-a4fe-5787c30c4939_680x.png?v=1685521023",
        image2: "https://dadus.co.in/cdn/shop/files/MixSweet_Ghee_Khova_500gms-01_680x.jpg?v=1712909808",
      },
    ],
    Bakery: [
      {
        name: "Atta Nankatai",
        price: "₹ 220",
        weights:[
          {weight:"250 Gms" , price:550},
          {weight:"500 Gms" , price:1000},
        ],
        shelfLife: "30 Days",
        image1: "https://dadus.co.in/cdn/shop/files/4_8a44caaa-79d8-4e05-a4fe-5787c30c4939_680x.png?v=1685521023",
        image2: "https://dadus.co.in/cdn/shop/files/MixSweet_Ghee_Khova_500gms-01_680x.jpg?v=1712909808",
      },
      {
        name: "Tie Khari",
        price: "₹ 195",
        weights:[
          {weight:"250 Gms" , price:550},
          {weight:"500 Gms" , price:1000},
        ],
        shelfLife: "20 Days",
        image1: "https://dadus.co.in/cdn/shop/files/4_8a44caaa-79d8-4e05-a4fe-5787c30c4939_680x.png?v=1685521023",
        image2: "https://dadus.co.in/cdn/shop/files/MixSweet_Ghee_Khova_500gms-01_680x.jpg?v=1712909808",
      },
    ],
  };

  const activeProducts = allProducts[activeTab];

  return (
    <>
      <div className="bestsellers-container">
        <div className="bestsellers-header">
          <h2>Best Sellers</h2>
          <p>Sweeten your day with a wide variety of our best selling delicacies</p>
        </div>

        <div className="tabs-container">
          {Object.keys(allProducts).map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
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

            {activeProducts.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="product-card">
                  <div className="product-image-wrapper">
                    <img
                      src={product.image1}
                      alt={product.name}
                      className="product-image image-default"
                    />
                    <img
                      src={product.image2}
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
                  {
                    product.weights.map((weight,index)=><button className="weight-button" key={index}>{weight.weight}</button>)
                  }
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
    </>
  );
};

export default ProductCard;
