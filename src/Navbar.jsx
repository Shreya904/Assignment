import React from "react";
import { SlArrowRight } from "react-icons/sl";

const arrowStyle = {
  fontSize: "14px", // Adjust the size as needed
  verticalAlign: "middle", // Aligns the arrow with the middle of the text
  marginLeft: "5px", // Adjust spacing between the text and arrow
};

const Navbar = () => {
  return (
    <div className="nav">
      <div className="process">
        <p>
          Services <SlArrowRight style={arrowStyle} />
        </p>
        <p>
          Professional <SlArrowRight style={arrowStyle} />
        </p>
        <p>
          Time <SlArrowRight style={arrowStyle} />
        </p>
        <p>Confirm</p>
      </div>
    </div>
  );
};

export default Navbar;
