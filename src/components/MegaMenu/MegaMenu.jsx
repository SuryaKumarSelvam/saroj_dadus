import React, { useEffect } from 'react';
import './MegaMenu.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../features/categoriesSlice';
import { Link } from 'react-router-dom';

const MegaMenu = ({closeMenu}) => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.categories);
console.log(categories)
  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.length]);
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

  if (error) {
    return <div>Error loading categories: {error}</div>;
  }

  return (
    <div className="mega-menu">
      {categories.map((category, index) => (
        <div className="menu-section" key={category.id || index}>
          <img
            src={category.image || 'https://dadus.co.in/cdn/shop/files/title_banner_400_205_286x.jpg?v=1728976529c'}
            alt={category.name || 'Category Image'}
            className="menu-image"
            loading="lazy"
          />
          <h4>{category.categoryName || 'Category Name'}</h4>
          <ul>
            {category.subcategories?.length > 0 ? (
              category.subcategories.map((sub, subIndex) => (
                <li key={sub._id || subIndex}>
                  <Link to={`/products/${category.categoryName}/${sub.name}/${sub._id}`} onClick={closeMenu} >
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
  );
};

export default MegaMenu;
