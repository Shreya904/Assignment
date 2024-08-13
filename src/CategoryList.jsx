import React from "react";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

const CategoryList = ({ categories, onClickCategory, activeCategory }) => {
  const handleScroll = (direction) => {
    const container = document.querySelector(".category-list");
    if (container) {
      const scrollAmount = direction === "right" ? 100 : -100;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="white">
      <div className="heading">
        <h2>Select Services</h2>
      </div>
      <div className="category-list-container">
        <div className="category-list">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-button ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => onClickCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="arrow-left" onClick={() => handleScroll("left")}>
          <IoMdArrowDropleftCircle />
        </div>
        <div className="arrow-right" onClick={() => handleScroll("right")}>
          <IoMdArrowDroprightCircle />
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
