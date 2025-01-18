import React from 'react'
import './CorporateGifting.css'
import { FaDownload, FaArrowRight ,FaGift} from "react-icons/fa"; 
// import '../../assets/css/main.css';
const CorporateGifting = () => {

    const cards = [
    {
      title: "Festive Sweets Boxes",
      description: "Office cravings satisfied with a wide variety of our fresh sweets.",
      image: "/assets/img/gift.jpg", // Replace with the actual image path
    },
    {
      title: "Office Parties",
      description: "Office cravings satisfied with a wide variety of our fresh sweets./collections/corporate-gifting",
      image: "/assets/img/gift1.jpg", // Replace with the actual image path
    },
    {
      title: "Client Gifting",
      description: "Office cravings satisfied with a wide variety of our fresh sweets./collections/corporate-gifting",
      image: "/assets/img/gift2.jpg", // Replace with the actual image path
    },
  ];

    const products = [
    { id: 1, name: "Product 1", image: "path/to/image1.jpg" },
    { id: 2, name: "Product 2", image: "path/to/image2.jpg" },
    { id: 3, name: "Product 3", image: "path/to/image3.jpg" },
    { id: 4, name: "Product 4", image: "path/to/image4.jpg" },
    { id: 5, name: "Product 5", image: "path/to/image5.jpg" },
    { id: 6, name: "Product 6", image: "path/to/image6.jpg" },
  ];

  return (
    <>
     <div className="celebration-banner">
      <div className="banner-content">
        <h1>The Taste of <br/>Celebration!</h1>
      </div>
    </div>
    <div className="D-panco-page-info">
  <div className="section section-blends section-full">
    <div className="brand-info">
      <div className="brand-img right-img-div">
        <img
          src="/assets/img/gift.jpg"
          alt="brand-img"
        />
      </div>
      <div className="brand-description">
        <img
          src="/assets/img/gift-box.png"
          alt="brand-icon"
        />
        <h2 className="h2">
          Corporate Gifting
        </h2>
        <p>
          Dadu’s rings in the revelry of festivities and delight of ﬂavours for
          many corporate families. With our exquisite range of handpicked
          ﬂavours, encased in vibrant festive packaging, gifting goes beyond a
          box - it becomes a stunning sensory experience that isThe Taste of
          Celebration!
        </p>
      </div>
    </div>
  </div>
</div>

     <div className="corporate-experiences">
      <h2 className="title">Corporate Experiences</h2>
      <p className="subtitle">
        Our services are involved at multiple stages in a corporate involving a wide variety of
        products.
      </p>
      <div className="cards">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div
              className="card-image"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="card-overlay">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="corporate-product-gallery">
  <div className="section section-blends section-full">
    <div className="sec-heading">
      <h2 className="h2 ">
        <span className='title'>Our Products</span>
      </h2>
      <p className='description'>
        Choose from a wide variety of products ranging from our mouth-watering
        sweets to crunchy, nutty namkeens to spice up your gift box.{" "}
      </p>
    </div>
    <div className="pro-download-links">
      <div className="pro-download-link-box">
        <a
          className="download-des"
          target="_blank"
          href="#"
          download=""
        >
          Download Product Catalogue
          <svg
            width={22}
            height={22}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_157_195)">
              <path
                d="M22 20.625C22 21.3844 21.3844 22 20.625 22H1.375C0.615613 22 0 21.3844 0 20.625C0 19.8656 0.615613 19.25 1.375 19.25H20.625C21.3844 19.25 22 19.8656 22 20.625ZM10.0277 16.2692C10.2963 16.5377 10.6481 16.6719 11 16.6719C11.3518 16.6719 11.7038 16.5376 11.9723 16.2692L16.844 11.3975C17.3809 10.8605 17.3809 9.98993 16.844 9.45295C16.307 8.91597 15.4364 8.91597 14.8994 9.45295L12.375 11.9774V1.375C12.375 0.615613 11.7594 0 11 0C10.2406 0 9.625 0.615613 9.625 1.375V11.9774L7.10059 9.45295C6.56361 8.91597 5.69302 8.91597 5.15604 9.45295C4.61905 9.98993 4.61905 10.8605 5.15604 11.3975L10.0277 16.2692Z"
                fill="#88070A"
              />
            </g>
            <defs>
              <clipPath id="clip0_157_195">
                <rect width={22} height={22} fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
      <div className="pro-download-link-box">
        <a
          className="download-des"
          href="#"
        >
          <div className="visit-link">
            Send Enquiries From Our Virtual Catalog!
            <svg
              width={17}
              height={22}
              viewBox="0 0 17 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_157_205)">
                <path
                  d="M16.2692 11.7256C16.5377 11.457 16.6719 11.1052 16.6719 10.7533C16.6719 10.4015 16.5376 10.0495 16.2692 9.78104L11.3975 4.90933C10.8605 4.37235 9.98993 4.37235 9.45295 4.90933C8.91597 5.44631 8.91597 6.3169 9.45295 6.85389L11.9774 9.3783L1.375 9.3783C0.615613 9.3783 -3.06246e-07 9.99391 -2.73052e-07 10.7533C-2.39858e-07 11.5127 0.615613 12.1283 1.375 12.1283L11.9774 12.1283L9.45295 14.6527C8.91597 15.1897 8.91597 16.0603 9.45295 16.5973C9.98993 17.1342 10.8605 17.1342 11.3975 16.5973L16.2692 11.7256Z"
                  fill="#88070A"
                />
              </g>
              <defs>
                <clipPath id="clip0_157_205">
                  <rect width={17} height={22} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </a>
      </div>
    </div>
    <ul className="corporate-gallery-wrapper">
      <li className="group">
        <a href="#">
          <img
            src="/assets/img/ha.jpg"
            alt="gallery-img"
            className="zoom-image"
          />
          <div className="product-img-overlay">
            <p className="h3">Hampers</p>
          </div>
        </a>
      </li>
      <li className="group">
        <a href="#">
          <img
            src="/assets/img/mi.jpg"
            alt="gallery-img"
            className="zoom-image"
          />
          <div className="product-img-overlay">
            <p className="h3">Indian Mithai</p>
          </div>
        </a>
      </li>
      <li className="group">
        <a href="#">
          <img
            src="/assets/img/co.jpg"
            alt="gallery-img"
            className="zoom-image"
          />
          <div className="product-img-overlay">
            <p className="h3">Chocolates and Confectionery</p>
          </div>
        </a>
      </li>
      <li className="group">
        <a href="#">
          <img
            src="/assets/img/df.jpg"
            alt="gallery-img"
            className="zoom-image"
          />
          <div className="product-img-overlay">
            <p className="h3">Dry Fruits</p>
          </div>
        </a>
      </li>
      <li className="group">
        <a href="../collections/corporate-gifting.html">
          <img
            src="/assets/img/na.jpg"
            alt="gallery-img"
            className="zoom-image"
          />
          <div className="product-img-overlay">
            <p className="h3">Namkeen</p>
          </div>
        </a>
      </li>
      <li className="group">
        <a href="#">
          <img
            src="/assets/img/td.jpg"
            alt="gallery-img"
            className="zoom-image"
          />
          <div className="product-img-overlay">
            <p className="h3">Turkish Delights</p>
          </div>
        </a>
      </li>
    </ul>
    <div className="light-box-popup">
      <button className="close-popup">
        <svg
          role="presentation"
          strokeWidth={2}
          focusable="false"
          width={24}
          height={24}
          className="icon icon-close"
          viewBox="0 0 24 24"
        >
          <path
            d="M17.658 6.343 6.344 17.657M17.658 17.657 6.344 6.343"
            stroke="currentColor"
          />
        </svg>
      </button>
    </div>
  </div>
</div>
      <div className="contact-form-container">
      <h2>Write To Us Below</h2>
      <p>
        Contact us for anything related to our Wedding services at{" "}
        <a href="mailto:info@dadus.co.in" className="email-link">
          info@dadus.co.in
        </a>{" "}
        or call us{" "}
        <a href="tel:+99999999999" className="phone-link">
          +91 9999999999
        </a>
      </p>
      <form className="contact-form">
        <input type="text" placeholder="*Name" required />
        <input type="email" placeholder="*Email" required />
        <input type="tel" placeholder="*Phone Number" required />
        <input type="text" placeholder="*Company" required />
        <select required>
          <option value="" disabled selected>
            *Choose Experience
          </option>
          <option value="wedding">Wedding</option>
          <option value="corporate">Corporate</option>
          <option value="other">Other</option>
        </select>
        <textarea placeholder="*Message" rows="5" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  )
}

export default CorporateGifting