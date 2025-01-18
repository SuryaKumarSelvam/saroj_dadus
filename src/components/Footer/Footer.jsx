import React from 'react'
import './Footer.css';
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn, FaBuilding, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Information Section */}
        <div className="footer-section">
          <h4>Contact Information</h4>
          <p>
            <FaBuilding className="icon" /> Fake Road, Opp Fake Street,
            <br />
            Himayatnagar, Hyderabad, 500029
          </p>
          <p>
            <FaPhoneAlt className="icon" /> +91 9999999999
          </p>
          <p>
            <FaEnvelope className="icon" /> sales@sarojeats.co.in
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Shop Global</li>
            <li>Contact Us</li>
            <li>Store Locator</li>
          </ul>
        </div>

        {/* Policies Section */}
        <div className="footer-section">
          <h4>Policies</h4>
          <ul>
            <li>Payment & Shipping</li>
            <li>Return & Refund</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaInstagram />
            <FaFacebookF />
            <FaYoutube />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© Copyright 2025, SAROJEATS. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer