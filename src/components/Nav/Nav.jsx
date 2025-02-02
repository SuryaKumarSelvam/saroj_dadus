import React, { useEffect, useState } from "react";
import { FaSearch, FaTimes, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import "./Nav.css";
import MegaMenu from "../MegaMenu/MegaMenu";
import MobileMenu from "../MobileMenu/MobileMenu";
import CartSideBar from "../CartSideBar/CartSideBar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../features/categoriesSlice';
const categories = [
    { name: "Indian Mithai", products: ["Milk Mithai", "Product 2"], image: "https://dadus.co.in/cdn/shop/files/Desktop_-_Category_Tiles_-_Indian_Mithai_286x.jpg?v=1690952010" },
    { name: "Festive Collection ", products: ["Product 3", "Product 4"] ,image:"https://dadus.co.in/cdn/shop/files/title_banner_400_205_286x.jpg?v=1728976529c"},
    { name: "Bengali Sweets", products: ["Product 3", "Product 4"],image:"https://dadus.co.in/cdn/shop/files/Desktop_-_Category_Tiles_-_Indian_Mithai_286x.jpg?v=1690952010" },
    { name: "Namkeen and Snacks ", products: ["Product 3", "Product 4"],image:"https://dadus.co.in/cdn/shop/files/Desktop_-_Category_Tiles_-_Namkeen_and_Snacks_286x.jpg?v=1690952061" },
  ];

const products = [
  { name: "Milk Mithai", image: "https://dadus.co.in/cdn/shop/files/5_ed6a8663-6790-43b2-8b35-def51fb7ea43_680x.png?v=1718370484" },
  { name: "Dry Fruits Mithai", image: "https://dadus.co.in/cdn/shop/files/5_ed6a8663-6790-43b2-8b35-def51fb7ea43_680x.png?v=1718370484" },
  { name: "Less Sugar Mithai", image: "https://dadus.co.in/cdn/shop/files/5_ed6a8663-6790-43b2-8b35-def51fb7ea43_680x.png?v=1718370484" },
  { name: "Bites and Chikkis", image: "https://dadus.co.in/cdn/shop/files/5_ed6a8663-6790-43b2-8b35-def51fb7ea43_680x.png?v=1718370484" },
  { name: "Dry Fruit Namkeen", image: "https://dadus.co.in/cdn/shop/files/5_ed6a8663-6790-43b2-8b35-def51fb7ea43_680x.png?v=1718370484" },
  { name: "All Namkeen", image: "https://dadus.co.in/cdn/shop/files/5_ed6a8663-6790-43b2-8b35-def51fb7ea43_680x.png?v=1718370484" },
]

const Nav = () => {
  const [showSearchPopup, setShowSearchPopup] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);

  const navigate = useNavigate();
  const user = useSelector((state) => state.userData);
  const {cartItems} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.categories);
  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.length]);

   const handleNavigation = () => {
    if (user.user != null) {
      navigate("/profile"); 
    } else {
      navigate("/login"); 
    }
  };
   const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  const handleMouseEnter = () => {
    setShowMegaMenu(true);
    setIsHovered(true);
  };

 const handleMouseLeave = () => {
  setTimeout(() => {
    setShowMegaMenu(false);
  }, 200); // Adds delay for smooth effect
};

  const handleMegaMenuHover = () => {
    setIsHovered(true);
  };

  const handleMegaMenuLeave = () => {
    setIsHovered(false);
    setShowMegaMenu(false);
  };

  const toggleSearchPopup = () => {
    setShowSearchPopup(!showSearchPopup);
  };

  const clearSearchText = () => {
    setSearchText("");
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

 



  return (
    <>
      <nav className="navbar">
       <Link to="/"> <div className="logo">
        <img src="/assets/logo/logo.png" alt="logo"/>
        </div></Link>
        <div className="nav-links">
          <div className="menu-item"
          onMouseEnter={handleMouseEnter}
          >Shop
          </div>
           {showMegaMenu && (
          <div
             className={`mega-menu-wrapper ${showMegaMenu ? 'show' : ''}`}
            onMouseEnter={handleMegaMenuHover}
            onMouseLeave={handleMegaMenuLeave}
          >
            <MegaMenu closeMenu={() => setShowMegaMenu(false)} />
          </div>
        )}
          <div className="menu-item"><Link to="/corporate-gifting">Corporate Gifting</Link></div>
          <div className="menu-item">Recognition</div>
          <div className="menu-item"><Link to="/about-us">About Us</Link></div>
          <div className="menu-item"><Link to='/contact-us'>Contact Us</Link></div>
        </div>
        <div className="nav-icons">
          <FaSearch className="icon" onClick={toggleSearchPopup} />
          <FaUser className="icon" onClick={handleNavigation}  />
          <div className="cart-icon">
            <FaShoppingCart onClick={toggleCart} />
            <span className="cart-count">{cartItems.length}</span>
          </div>
           <CartSideBar isOpen={isCartOpen} toggleCart={toggleCart} />
          <FaBars className="mobile-menu-icon"
          onClick={() => setShowMobileMenu(true)} 
           />
        </div>
         {showMobileMenu && <MobileMenu onClose={() => setShowMobileMenu(false)} />}
        
      </nav>
      {showSearchPopup && (
        <div className="search-popup">
          <button className="close-btn" onClick={toggleSearchPopup}>
            &times;
          </button>
          <div className="search-container">
            <div className="input-wrapper">
              <FaSearch className="input-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search for..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              {searchText && (
                <FaTimes className="clear-icon" onClick={clearSearchText} />
              )}
            </div>
            {searchText.trim() === "" ? (
              <div className="popular-searches">
                {categories.map((category, index) => (
                  <div className="search-item" key={index}>
                    <img   src={category.image ? category.image : "https://dadus.co.in/cdn/shop/files/Desktop_-_Category_Tiles_-_Indian_Mithai_286x.jpg?v=1690952010"}  alt={category.name} />
                    <p>{category.categoryName}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="popular-searches">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product, index) => (
                    <div className="search-item" key={index}>
                      <img src={product.image} alt={product.name} />
                      <p>{product.name}</p>
                    </div>
                  ))
                ) : (
                  <p>No products found</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
       
    </>
  );
};

export default Nav;
