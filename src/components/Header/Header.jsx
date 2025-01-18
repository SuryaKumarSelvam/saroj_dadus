import React from 'react';
import './Header.css';
import { FaGlobeAsia } from "react-icons/fa"; 

const Header = () => {
  return (
    <>
      <div className="header">
      <p>First in Chembur Finest in the City</p>
      <div className="header-right">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
          alt="India Flag"
          className="flag-icon"
        />
        <span className="currency">India (INR ₹)</span>
      </div>
    </div>
    </>
  )
}

export default Header