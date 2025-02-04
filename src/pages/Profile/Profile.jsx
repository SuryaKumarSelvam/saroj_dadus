import React, { useState, useEffect } from 'react';
import { FaBoxOpen } from "react-icons/fa";
import './Profile.css';
import { logout } from '../../features/userSlice';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from '../../utils/axiosInstance';

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Orders");
  const [userDetails, setUserDetails] = useState(null);
  const [orders, setOrders] = useState([]); // Store user orders
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userData.userId);

  // Fetch User Details
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axiosInstance.get(`users/${userId}`);
        setUserDetails(response.data);
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      }
    };

    if (userId) {
      fetchUserDetails();
    }
  }, [userId]);

  // Fetch Orders
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axiosInstance.get(`/orders/user/${userId}`);
        setOrders(response.data); // Assuming API returns { orders: [...] }
      } catch (error) {
        console.error("Failed to fetch orders:", error);
        setError("Failed to load orders. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchOrders();
    }
  }, [userId]);
console.log(orders)
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
console.log(error)
  return (
    <div className="tabs-container-profile">
      {/* Tabs Header */}
      <div className="tabs-header">
        <div className="tabs-center">
          <button
            className={`tab-button ${activeTab === "Orders" ? "active" : ""}`}
            onClick={() => handleTabClick("Orders")}
          >
            Orders
          </button>
          <button
            className={`tab-button ${activeTab === "Addresses" ? "active" : ""}`}
            onClick={() => handleTabClick("Addresses")}
          >
            Addresses
          </button>
        </div>
        <div className="logout-container">
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Tabs Content */}
      <div className="tab-contentt">
        {/* Orders Tab */}
          {activeTab === "Orders" && (
  <div className="orders-tab">
    {loading ? (
      <p>Loading orders...</p>
    ) : orders?.length === 0 || !orders.some(order => order.orderItems.length > 0) ? ( 
      // Show "No Orders" message if there are no orders or all orders have no items
      <div className="no-orders">
        <FaBoxOpen className="box-icon" />
        <p className="no-orders-text">You haven't placed any orders yet.</p>
        <button className="continue-button" onClick={() => navigate("/shop")}>
          Continue Shopping
        </button>
      </div>
    ) : (
      <div className="order-items">
        <div className="order-header">
          <span>Product</span>
          <span>Quantity</span>
          <span>Total</span>
          <span>Status</span>
        </div>
        {orders.map((order) =>
          order.orderItems.length > 0 &&
          order.orderItems.map((item) => (
            <div className="order-item" key={item._id}>
              {/* Product Details */}
              <div className="order-product">
                <img src={item.productId.image} alt={item.productId.name} className="cart-product-image" />
                <div className="order-product-info">
                  <p className="order-product-name">{item.productId.name}</p>
                  <p className="order-product-price">₹ {item.productId.price}</p>
                  <span className="product-weight-order">500 Gms</span>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="order-qty">
                <input type="number" value={item.quantity} readOnly className="quantity-input" />
              </div>

              {/* Total Price */}
              <div className="order-total">
                <p>₹ {item.quantity * item.unitPrice}</p>
              </div>
              <div className="order-total">
                <p>{order.status}</p>
              </div>
            </div>
          ))
        )}
      </div>
    )}
  </div>
)}



        {/* Addresses Tab */}
        {activeTab === "Addresses" && (
          <div className="addresses-tab">
            <h2 className="addresses-title">Addresses</h2>
            <div className="addresses-list">
              {userDetails ? (
                <div className="address-card">
                  <h3 className="address-heading">Default Address</h3>
                  <p>{userDetails.name}</p>
                  <p>{userDetails.street || "Yet to Update.."}</p>
                  <p>{userDetails.zip && userDetails.city ? `${userDetails.zip}, ${userDetails.city}` : "Yet to Update.."}</p>
                  <p>{userDetails.country || "Yet to Update.."}</p>
                  <div className="address-actions">
                    <button className="edit-button">Edit</button>
                    <button className="delete-button">Delete</button>
                  </div>
                </div>
              ) : (
                <p>Loading address details...</p>
              )}
            </div>
            <button className="add-address-button">Add address</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
