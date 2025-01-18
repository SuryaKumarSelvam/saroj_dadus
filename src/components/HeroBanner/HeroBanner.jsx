import React, { useState, useEffect } from "react";
import "./HeroBanner.css";

const bannerContent = [
  {
    backgroundImage: "url('https://dadus.co.in/cdn/shop/files/Untitled_design_30.png?v=1729162936&width=2000')",
    heading: "India's Favourite Laddu",
    subHeading: "30 Years of Unmatched Taste and Quality",
    buttonText: "Shop Now",
  },
  {
    backgroundImage: "url('https://dadus.co.in/cdn/shop/files/Desktop_-_Banner2_71c1d5f1-6e79-466b-98a4-0fe0b6eacb67.jpg?v=1691074823&width=2000')",
    heading: "Discover Sweetness",
    subHeading: "Traditional Sweets for Every Occasion",
    buttonText: "Explore Now",
  },
  {
    backgroundImage: "url('https://dadus.co.in/cdn/shop/files/top_carousel_banner_desktop_2000_732.jpg?v=1728976597&width=2000')",
    heading: "Delightful Moments",
    subHeading: "Authentic Taste in Every Bite",
    buttonText: "Order Today",
  },
];

const HeroBanner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true); // Trigger animation
      setTimeout(() => {
        setCurrentBanner((prev) => (prev + 1) % bannerContent.length);
        setAnimate(false); // Reset animation
      }, 1000); // Animation duration
    }, 5000); // Change content every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const { backgroundImage, heading, subHeading, buttonText } = bannerContent[currentBanner];

  return (
    <div className="hero-banner" style={{ backgroundImage }}>
      <div className={`content ${animate ? "animate" : ""}`}>
        <h1>{heading}</h1>
        <p>{subHeading}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default HeroBanner;
