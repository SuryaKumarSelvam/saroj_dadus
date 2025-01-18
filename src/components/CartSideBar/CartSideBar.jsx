import React from 'react'
import './CartSideBar.css'

const CartSideBar = ({ isOpen, toggleCart }) => {
      if (!isOpen) return null;

  return (
    <>
       <div className="cart-popup-container">
      <div className="cart-popup">
        <div className="cart-header">
          <h2>Cart</h2>
          <button className="close-btn" onClick={toggleCart}>
            &times;
          </button>
        </div>
        <p className="cart-shipping-info">
          Add <span className="highlight">650 Gms</span> more to avail{" "}
          <span className="free-shipping">FREE shipping</span>
        </p>
        <hr />
        <div className="cart-item">
          <div className="item-image">
            <img
              src="https://dadus.co.in/cdn/shop/files/5_ed6a8663-6790-43b2-8b35-def51fb7ea43_680x.png?v=1718370484"
              alt="Assorted Baklavas"
            />
          </div>
          <div className="item-details">
            <p className="item-name">Assorted Baklavas (9pcs)</p>
            <p className="item-price">₹ 1,410</p>
          </div>
          <button className="remove-btn">Remove</button>
        </div>
        <hr />
        <div className="cart-total">
          <p className="total-label">Total</p>
          <p className="total-amount">₹ 1,410</p>
        </div>
        <div className="cart-actions">
          <button className="view-cart-btn">View Cart</button>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default CartSideBar