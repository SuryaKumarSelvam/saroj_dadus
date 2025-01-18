import React from 'react'
import './Contact.css'
import { IoIosCall } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";


const Contact = () => {
  return (
    <>
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Do you have any questions?</p>
      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="E-mail" required />
        </div>
        <textarea placeholder="Message" rows="5" required></textarea>
        <button type="submit">Send message</button>
      </form>
    </div>
     <div className="locations-container">
      <h1 className="locations-title">Locations</h1>
      <div className="location-info">
        <p>Fake Street, Opp Fake Street, Secunderabad 500003</p>
        <div className="contact-info">
          <span>
            <IoIosCall/>
            +91 9999999999
          </span>
          <span>
            <FiMapPin />
            Directions
          </span>
        </div>
        <hr />
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7099707068834!2d78.49336761434494!3d17.44229808803819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb916f7b7b9fbf%3A0x4e06c611de0c273c!2sParadise!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    </>
  )
}

export default Contact