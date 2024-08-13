import React, { forwardRef } from "react";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";

const CategoryList = forwardRef(
  ({ categories, onClickCategory, activeCategory }, ref) => {
    const handleScroll = (direction) => {
      const container = ref.current;
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
          <div ref={ref} className="category-list">
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
  }
);

export default CategoryList;
