import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
     <div className="celebration-banner">
      <div className="banner-content">
        <h1>Taste the Legacy of <br/>Craftsmanship</h1>
      </div>
    </div>
     <section class="our-staff">
        <div class="section">
        <div class="our-staff-wrap">
        <div class="our-staff-box">
            <h4>8</h4>
            <h3>Talented Chefs</h3>
        </div>
        <div class="our-staff-box">
            <h4>400+</h4>
            <h3>Delicacies</h3>
        </div>
        <div class="our-staff-box">
            <h4>12</h4>
            <h3>Retail Stores</h3>
        </div>
        </div>
        </div>
    </section>
    <section className="who-we">
        <div className="section">
            <div className="who-we-wrap">
            <div className="who-we-left">
                <div className="who-we-left-img">
                <img
                    src="/assets/img/abt.jpg"
                    alt="Who we are"
                    height=""
                    width=""
                />
                </div>
            </div>
            <div className="who-we-right">
                <h2>Who We Are</h2>
                <p>
                Dadu's made a humble beginning in 1993 when Mr. Rajesh Dadu started
                'Dadu's Mithai Vatika' at Himayatnagar, Hyderabad which was an 800 sq.
                ft. small shop. Today, Dadu's is a food business group with special
                ventures focused on sweets, savouries, fine dining vegetarian
                restaurants, gelato, Turkish sweets and bakery. Dadu's is very popular
                among its customers, and we owe this success to our relentless drive
                to maintain taste, hygiene, quality and our passion for customer
                satisfaction.
                </p>
            </div>
            </div>
        </div>
        </section>
         <section className="about-testimonial">
        <div className="about-test-wrap">
            <p>
            Crafted with exceptional care and only the finest ingredients, we offer
            unique quality products that are equally beautiful, hygienic and
            delicious.
            </p>
            <div className="about-test-img">
            <div className="about-test-img-wrap">
                <img
                src="../cdn/shop/files/owner-profile_100x6b5f.png?v=1679997845"
                alt="Profile"
                />
            </div>
            </div>
            <div className="about-name">
            <h6>NAME</h6>
            <span>Founder and Managing Director</span>
            </div>
        </div>
        </section>

        <section className="our-values">
  <div className="section">
    <div className="values-wrap">
      <div className="sec-heading">
        <h2 className="h2">
          <span>Our Values</span>
        </h2>
      </div>
      <div className="values-left">
        <ul>
          <li>
            <img src="/assets/img/2_small.png" />
            <h6>100% Vegetarian</h6>
            <p>
              Mouth watering products for all our vegetarian friends out there
            </p>
          </li>
          <li>
            <img src="/assets/img/1_small.png" />
            <h6>High Quality</h6>
            <p>Highest quality of products with a consistent taste</p>
          </li>
          <li>
            <img src="/assets/img/Technology_30x.png" />
            <h6>Technology</h6>
            <p>Cutting-edge packaging for taste and freshness preservation</p>
          </li>
          <li>
            <img src="/assets/img/3_small.png" />
            <h6>Hygienic</h6>
            <p>Follow a heath-focused hygienic preparation of products</p>
          </li>
        </ul>
      </div>
      <div className="values-right">
        <div className="values-video-wrap">
          <video
            controls=""
            autoPlay=""
            muted=""
            loop=""
            playsInline=""
            poster="../cdn/shop/files/Rectangle_43_800x02d5.png?v=1680503645"
          >
            <source
              src="https://cdn.shopify.com/videos/c/o/v/98979a7975c642abacfed32188af3c5c.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="values-video-btn">
          <h5>Get a sneak peak on how our sweets are made!</h5>
          <button>
            <img
              src="../../cdn.shopify.com/s/files/1/0722/9692/3416/files/play7668.png?v=1680073111"
              alt="Play"
            />
            Watch Now
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  )
}

export default About