import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../features/cartSlice";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cartItems, totalPrice, totalQuantity } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [orderNote, setOrderNote] = useState("");

  const handleQuantityChange = (id, quantity, weight) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, weight, newQuantity: quantity }));
    }
  };

  const handleRemoveItem = (id, weight) => {
    dispatch(removeFromCart({ id, weight }));
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { orderNote, cartItems } });
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Cart</h1>
      <p className="free-shipping-message">
        Add <span>300 Gms</span> more to avail <b>FREE shipping</b>
      </p>

      <div className="cart-content">
        {/* Left: Cart Items */}
        <div className="cart-items">
          <div className="cart-header">
            <span>Product</span>
            <span>Quantity</span>
            <span>Total</span>
            <span>Remove</span>
          </div>

          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={`${item.id}-${item.weight}`}>
                <div className="cart-product">
                  <img src={item.img} alt={item.name} className="cart-product-image" />
                  <div className="cart-product-info">
                    <p className="cart-product-name">{item.name} ({item.weight}g)</p>
                    <p className="cart-product-price">₹ {item.price}</p>
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="cart-controls">
                  <div className="quantity-selector">
                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1, item.weight)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1, item.weight)}>+</button>
                  </div>
                </div>

                <div className="cart-total">₹ {item.totalPrice}</div>

                {/* Remove Button */}
                <button className="cart-remove" onClick={() => handleRemoveItem(item.id, item.weight)}>
                  <FaTrash />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Right: Summary Box */}
        <div className="cart-summary">
          <div className="summery-header">
             <h3>Subtotal</h3>
          <p className="summary-total">₹ {totalPrice}</p>
          </div>
          <p className="summary-tax">Tax included. Shipping calculated at checkout.</p>

          {/* Order Note */}
          <textarea
            className="order-note"
            placeholder="Order note"
            value={orderNote}
            onChange={(e) => setOrderNote(e.target.value)}
          ></textarea>

          {/* Checkout Button */}
          <button className="checkout-button" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
