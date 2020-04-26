import React from "react";
import PropTypes from "prop-types";
const Item = ({
  item: {
    company,
    title,
    contract_time,
    location,
    salary_max,
    description,
    redirect_url
  }
}) => {
  return (
    <div className='company-list'>
      <div className='row'>
        <div className='col-md-3 col-sm-12'>
          <div className='company-logo'>
            <span className='letter'>
              {company.display_name
                ? company.display_name.replace(/(<([^>]+)>)/gi, "").charAt(0)
                : null}{" "}
            </span>
          </div>
        </div>
        <div className='col-md-9 col-sm-12'>
          <div className='company-content'>
            <h3>
              {title.replace(/(<([^>]+)>)/gi, "")}{" "}
              <span className={contract_time}>{contract_time} </span>
            </h3>
            <p>
              <span className='company-name'>
                <i className='fa fa-briefcase'></i>
                {company.display_name}
              </span>
              <span className='company-location'>
                <i className='fa fa-map-marker'></i> {location.area}
              </span>
              <span className='package'>
                <i className='fa fa-money'></i>
                {salary_max + "$ , " + salary_max + "$"}
              </span>
            </p>
            <p className='job-par'>
              {description.replace(/(<([^>]+)>)/gi, "")}
            </p>
          </div>
        </div>
        <div className='col-md-12 col-sm-12' style={{ textAlign: "center" }}>
          <button className='aply-btn'>
            <a className='tag' target='_blank' href={redirect_url}>
              Aply
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
//Typecheking with propTypes
Item.propTypes = {
  item: PropTypes.object.isRequired
};
export default Item;
