import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft, FaPlus, FaMinus, FaClock, FaLeaf, FaFlask ,FaCheckCircle, FaTruck} from "react-icons/fa";
import './ProductDetail.css';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { useDispatch } from 'react-redux';
import {addToCart} from '../../features/cartSlice'
import ProductCardSlider from '../../components/ProductCardSlider/ProductCardSlider';

const CustomNextArrow = ({ onClick }) => (
    <button className="custom-arrow next-arrow" onClick={onClick} aria-label="Next Slide">
        <FaArrowRight size={24} />
    </button>
);

const CustomPrevArrow = ({ onClick }) => (
    <button className="custom-arrow prev-arrow" onClick={onClick} aria-label="Previous Slide">
        <FaArrowLeft size={24} />
    </button>
);

const ProductDetail = () => {
    const [activeTab, setActiveTab] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);
    const [selectedWeight, setSelectedWeight] = useState(null);
    const [pinCode, setPinCode] = useState();
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleTab = (tab) => {
        setActiveTab(activeTab === tab ? null : tab);
    };

  useEffect(() => {
    const fetchProduct = async () => {
        try {
            const response = await axiosInstance.get(`/products/${id}`);
            if (response.data) {
                setProduct(response.data);
                if (response.data.quantities) {
                    const firstWeight = Object.keys(response.data.quantities)[0]; 
                    setSelectedWeight(firstWeight);
                }
            }
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };

    fetchProduct();
}, [id]);

    const handleWeightChange = (weight) => {
        setSelectedWeight(weight);
    };

   
    // Slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
    };

    const addToCartHandler = () => {
        console.log('work')
    if (product && selectedWeight) {
        dispatch(addToCart({
            id: product._id,
            name: product.name,
            quantity: quantity,
            weight: selectedWeight,
            price: product.quantities[selectedWeight], // Price per unit
            totalPrice: product.quantities[selectedWeight] * quantity, // Total Price
            img: product.image
        }));
    }
};

// console.log(product.subCategory._id)
    return (
        <>
        <div className="product-page">
            <div className="left-section">
                {product?.images?.length > 0 ? (
                    <Slider {...sliderSettings} className="image-slider">
                        {product.images.map((img, index) => (
                            <div key={index}>
                                <img src={img} alt={`Slide ${index}`} className="slider-image" />
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <p>Loading images...</p>
                )}
            </div>

            <div className="right-section">
                <h2 className="product-title">{product?.name || 'Loading...'}</h2>
                <div className="shelf-life">
                    <FaClock className="icon" />
                    <span>10 days shelf life</span>
                </div>
                <div className="features">
                    <div className="feature">
                        <FaLeaf className="feature-icon" />
                        <span>Fresh</span>
                    </div>
                    <div className="feature">
                        <FaLeaf className="feature-icon" />
                        <span>Pure Ingredients</span>
                    </div>
                    <div className="feature">
                        <FaFlask className="feature-icon" />
                        <span>No Added Flavours and Preservatives</span>
                    </div>
                </div>

                <p className="productDetail-price">₹ {selectedWeight ? product?.quantities[selectedWeight] : 'N/A'}</p>
                <hr className='hr-line' />

                <p className='qty-name'>Weight:</p>
                <div className="product-weight">
                    {product?.quantities &&
                        Object.entries(product.quantities).map(([weight, price]) => (
                            <button
                                className={`weight-button ${selectedWeight === weight ? "active" : ""}`}
                                key={weight}
                                onClick={() => handleWeightChange(weight)}
                            >
                                {weight}g
                            </button>
                        ))}
                </div>
                 
                <p className='qty-name'>Quantity:</p>
                <div className="cart-controls">
                    <div className="quantity-selector">
                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>
                </div>
               <div className="pincode-container">
                    <div className="pincode-box">
                        <input
                        type="text"
                        className="pincode-input"
                        value={pinCode}
                        onChange={(e) => setPinCode(e.target.value)}
                        />
                        <button className="change-btn">Change</button>
                    </div>

                    <div className="delivery-info">
                        <div className="delivery-message">
                        <FaCheckCircle className="icon success-icon" />
                        <span>Yay! We deliver to your pincode.</span>
                        </div>
                        <div className="delivery-message">
                        <FaTruck className="icon truck-icon" />
                        <span>Estimated delivery to your pincode in 4-5 business days.</span>
                        </div>
                    </div>

                    <div className="button-group">
                        <button className="add-to-cart" onClick={addToCartHandler}>Add to cart</button>
                        <button className="buy-now">Buy it now</button>
                    </div>
                    </div>

                {product?.details?.length > 0 &&
                    product.details.map((detail, index) => (
                        <div key={index} className={`tab ${activeTab === index ? "open" : ""}`}>
                            <div className="tab-header" onClick={() => toggleTab(index)}>
                                <span>{detail.title}</span>
                                {activeTab === index ? <FaMinus /> : <FaPlus />}
                            </div>
                            <div className="tab-content">{detail.content}</div>
                        </div>
                    ))}

            </div>
           
        </div>
         <div className='product-des'>
                <h3>India's Favourite {product?.name}</h3>
                <p>{product?.description ? product.description : 'Description'}</p>
                <p>{product?.richDescription ? product.richDescription : 'Description'}</p>
            </div>
            {product?.subCategory?._id && <ProductCardSlider subcategoryId={product.subCategory._id} />}

        </>
    );
};

export default ProductDetail;
