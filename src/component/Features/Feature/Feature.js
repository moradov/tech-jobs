import React from "react";
import PropTypes from "prop-types";
const Feature = ({ name, icon, description }) => {
  return (
    <div className='col-md-4 col-sm-4'>
      <div className='features-content'>
        <span className='box1'>
          <i className={icon}></i>
        </span>
        <h3>{name} </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
//Typecheking with propTypes
Feature.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
export default Feature;
