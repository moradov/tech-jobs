import React from "react";
import PropTypes from "prop-types";
const Stat = ({ statData: { icon, number, name } }) => {
  return (
    <div className='col-md-3 col-sm-3'>
      <div className='counter-text'>
        <span className='box1 test'>
          <i className={icon}></i>
        </span>
        <h3>{number} </h3>
        <p>{name} </p>
      </div>
    </div>
  );
};
Stat.propTypes = {
  statData: PropTypes.object.isRequired
};
export default Stat;
