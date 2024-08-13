import React from "react";
import { FaStar } from "react-icons/fa6";
import snp from "./assets/images.jpeg";

const SideCard = () => {
  return (
    <div className="bill-container">
      <div className="header">
        <img src={snp} alt="salon" className="salon-img" />
        <div className="header-content">
          <h2>H2 Salon Brooklyn</h2>
          <h3>
            4.9
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span>(4,105)</span>
          </h3>
          <p>Brooklyn, Stuyvesant Heights, New York</p>
          <div className="subheading">
            <p>No services selected</p>
          </div>
        </div>
      </div>
      <div className="bill">
        <h2>Total</h2>
        <h2>free</h2>
      </div>
      <div className="btn-div">
        <button className="button">Continue</button>
      </div>
    </div>
  );
};

export default SideCard;
