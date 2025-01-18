import React from 'react'
import './Home.css'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import ProductCard from '../../components/ProductCard/ProductCard'
import Banner from '../../components/Banner/Banner'

export const Home = () => {
  return (
    <>
    <HeroBanner/>
    <div className="features-container">
      <div className="feature-item">
        <img
          src="/assets/img/1_small.png"
          alt="High Quality"
          className="feature-icon"
        />
        <span className="feature-text">High Quality</span>
      </div>
      <div className="feature-item">
        <img
          src="/assets/img/2_small.png"
          alt="100% Vegetarian"
          className="feature-icon"
        />
        <span className="feature-text">100% Vegetarian</span>
      </div>
      <div className="feature-item">
        <img
          src="/assets/img/3_small.png"
          alt="Hygienic"
          className="feature-icon"
        />
        <span className="feature-text">Hygienic</span>
      </div>
    </div>
    <ProductCard/>
    <Banner/>
    </>
  )
}
