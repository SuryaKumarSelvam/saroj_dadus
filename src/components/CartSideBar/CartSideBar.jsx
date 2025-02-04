import React from 'react'
import './CartSideBar.css'
import { useSelector, useDispatch } from 'react-redux';
import {removeFromCart} from '../../features/cartSlice'
import { Link } from 'react-router-dom';


const CartSideBar = ({ isOpen, toggleCart }) => {
      if (!isOpen) return null;
  const {cartItems,totalPrice,totalQuantity} = useSelector(state => state.cart);
  console.log(cartItems)
   const dispatch = useDispatch();

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
        {
          cartItems.map((item,index)=>(
            <div className="cart-item">
          <div className="item-image">
            <img
              src={item.img? item.img : 'https://dadus.co.in/cdn/shop/files/5_ed6a8663-6790-43b2-8b35-def51fb7ea43_680x.png?v=1718370484'}
              alt={item.name}
            />
          </div>
          <div className="item-details">
            <p className="item-name">{item.name}(9pcs)</p>
            <p className="item-price">{item.quantity} ×  ₹ {item.price}</p>
          </div>
          <button className="remove-btn" onClick={()=>dispatch(removeFromCart({id:item.id,weight:item.weight}))}>Remove</button>
        </div>
          ))
        }
        
        <hr />
        <div className="cart-total">
          <p className="total-label">Total</p>
          <p className="total-amount">₹ {totalPrice}</p>
        </div>
        <div className="cart-actions">
          <Link to="/cart" className="view-cart-btn" onClick={toggleCart}>View Cart</Link>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default CartSideBar