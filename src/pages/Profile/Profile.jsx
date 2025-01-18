import React, { useState,useEffect} from 'react'
import { FaBoxOpen } from "react-icons/fa";
import './Profile.css'
import {logout} from '../../features/userSlice'
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import axiosInstance from '../../utils/axiosInstance'


const Profile = ()=>{
    const [activeTab,setActiveTab]= useState("Orders");
    const [userDetails, setUserDetails] = useState(null); 
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.userData.userId);

    console.log(userId)

    useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axiosInstance.get(`users/${userId}`);
        console.log(response)
        
        setUserDetails(response.data);
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      }
    };

    if (userId) {
      fetchUserDetails();
    }
  }, []);

  console.log(userDetails)

    const handleTabClick = (tab)=>{
        setActiveTab(tab);
    }

      const handleLogout = () => {
        dispatch(logout());
        // localStorage.removeItem("token");
        // localStorage.removeItem("token");
        navigate("/login");
     };
    return(
      <div className="tabs-container-profile">
      {/* Tabs Header */}
      <div className="tabs-header">
        {/* Centered Tabs */}
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
        {/* Logout Button */}
        <div className="logout-container">
          <button
            className="logout-button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Tabs Content */}
      <div className="tab-content">
        {activeTab === "Orders" && (
          <div className="orders-tab">
            <FaBoxOpen className="box-icon" />
            <p className="no-orders-text">You haven't placed any orders yet.</p>
            <button
              className="continue-button"
              onClick={() => navigate("/shop")}
            >
              Continue shopping
            </button>
          </div>
        )}

        {activeTab === "Addresses" && (
          <div className="addresses-tab">
            <h2 className="addresses-title">Addresses</h2>
            <div className="addresses-list">
              {userDetails ? (
                <>
                  {/* Default Address */}
                  <div className="address-card">
                    <h3 className="address-heading">Default address</h3>
                    <p>{userDetails.name}</p>
                    <p>{userDetails.street || "Yet to Update.."}</p>
                    <p>{userDetails.zip && userDetails.city ? `${userDetails.zip}, ${userDetails.city}` : "Yet to Update.."}</p>
                    <p>{userDetails.country || "Yet to Update.."}</p>
                    <div className="address-actions">
                      <button className="edit-button">Edit</button>
                      <button className="delete-button">Delete</button>
                    </div>
                  </div>
                </>
              ) : (
                <p>Loading address details...</p>
              )}
            </div>
            <button className="add-address-button">Add address</button>
          </div>
        )}
      </div>
    </div>
    ) 
}

export default Profile