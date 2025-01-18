import React, { useState } from "react";
import {
  FaTimes,
  FaChevronRight,
  FaChevronDown,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import "./MobileMenu.css";
import { Link } from "react-router-dom";

const MobileMenu = ({ onClose }) => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null); // Track selected category index

  const categories = [
    { name: "Indian Mithai", products: ["Milk Mithai", "Dry Fruits Mithai","Less Sugar Mithai","Bites and Chikkis"] },
    { name: "Festive Collection", products: ["Assorted Sweets"] },
    { name: "Bengali Sweets", products: [] },
    { name: "Namkeen and Snacks", products: ["All Namkeen","Dry Fruit Namkeen"] },
  ];

  const toggleShop = () => {
    setIsShopOpen(!isShopOpen);
  };

  const toggleCategory = (index) => {
    if (selectedCategoryIndex === index) {
      setSelectedCategoryIndex(null); // Close category if already open
    } else {
      setSelectedCategoryIndex(index); // Open selected category
    }
  };

  return (
    <div className="mobile-menu-overlay">
      <div className="mobile-menu">
        <FaTimes className="close-icon" onClick={onClose} />
        <ul className="menu-list">
          <li className="menu-item">
            <div className="menu-item-header" onClick={toggleShop}>
              Shop
              {isShopOpen ? <FaChevronDown /> : <FaChevronRight />}
            </div>
            {isShopOpen && (
              <ul className="submenu-list" >
                {categories.map((category, index) => (
                  <li key={index} className="submenu-item">
                    <div onClick={() => toggleCategory(index)} className="category-header">
                      <strong>{category.name}</strong>
                      {selectedCategoryIndex === index ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronRight />
                      )}
                    </div>
                    {selectedCategoryIndex === index && (
                      <ul className="products-list">
                        {category.products.map((product, idx) => (
                          <li key={idx}>{product}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
          <Link to="/corporate-gifting" onClick={onClose}><li>Corporate Gifting</li></Link>
         <Link to="#" onClick={onClose}><li>Recognition</li></Link> 
          <Link to="/about-us" onClick={onClose}><li>About Us</li></Link>
          <Link to="/contact-us" onClick={onClose}><li>Contact Us</li></Link>
        </ul>
        <div className="social-links">
          <FaInstagram />
          <FaFacebook />
          <FaYoutube />
          <FaLinkedin />
        </div>
        <div className="footer-mobile">
        <div className="footer-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
          alt="India Flag"
          className="flag-icon"
        />
        <span className="currency">India (INR ₹)</span>
        </div>
        <div className="footer-right">
            <p>Account</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
