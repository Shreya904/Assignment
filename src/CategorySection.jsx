import React from "react";

const CategorySection = ({ category, isActive }) => {
  return (
    <section
      className={`category-section ${isActive ? "active" : ""}`}
      id={category.title}
    >
      <h2>{category.title}</h2>
      <p>{category.Content}</p>
      <div className="cards">
        {category.cards && category.cards.length > 0 ? (
          category.cards.map((card, index) => (
            <div key={index} className="card">
              <h3>{card.head}</h3>
              <p>{card.time}</p>
              <p>{card.price}</p>
              <p>{card.para}</p>
            </div>
          ))
        ) : (
          <p>No cards available for this category.</p>
        )}
      </div>
    </section>
  );
};

export default CategorySection;
