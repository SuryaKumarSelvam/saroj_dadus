import React, { useState, useEffect } from 'react';
import './MegaMenu.css';
import axiosInstance from '../../utils/axiosInstance';
import { Link } from 'react-router-dom';

const MegaMenu = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // For showing loader

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get('subcategories/grouped-by-category');
        setCategories(response.data);
      } catch (err) {
        console.error('Error fetching categories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  console.log(categories)

  if (loading) {
    return (
      <div className="mega-menu">
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="menu-section skeleton" key={index}>
            <div className="skeleton-image"></div>
            <div className="skeleton-title"></div>
            <ul className="skeleton-list">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mega-menu">
      {categories.map((category, index) => (
        <div className="menu-section" key={category.id || index}>
          <img
            src={category.image || 'https://dadus.co.in/cdn/shop/files/title_banner_400_205_286x.jpg?v=1728976529c'}
            alt={category.name || 'Category Image'}
            className="menu-image"
            loading="lazy" // Lazy loading
          />
          <h4>{category.categoryName || 'Category Name'}</h4>
          <ul>
            {category.subcategories?.length > 0 ? (
              category.subcategories.map((sub, subIndex) => (
                <li key={sub._id || subIndex}>
                  <Link to={`/products/${category.categoryName}/${sub.name}/${category.categoryId}`}>
                  {sub.name || 'Subcategory Name'}
                  </Link>
                  </li>
              ))
            ) : (
              <li>No subcategories available</li>
            )}
          </ul>
        </div>
      ))}
    </div>

    //       <div className="mega-menu">
    // {
    //   categories.map((category,index)=>(
    //      <div className="menu-section">
    //     <img
    //       src="https://dadus.co.in/cdn/shop/files/Desktop_-_Category_Tiles_-_Indian_Mithai_286x.jpg?v=1690952010" // Replace with actual image URL
    //       alt="Indian Mithai"
    //       className="menu-image"
    //     />
    //     <h4>Indian Mithai</h4>
    //     <ul>
    //       <li>Milk Mithai</li>
    //       <li>Dry Fruits Mithai</li>
    //       <li>Less Sugar Mithai</li>
    //       <li>Bites and Chikkis</li>
    //     </ul>
    //   </div>
    //   ))
    // }
    // </div>
  );
};

export default React.memo(MegaMenu); // Prevent unnecessary re-renders
