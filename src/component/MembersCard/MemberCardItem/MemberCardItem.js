import React from "react";
import PropTypes from "prop-types";
function MemberCardItem({ memberData: { name, profile_img, position } }) {
  return (
    <div className='col-md-4 col-sm-4'>
      <div className='left-widget-sidebar'>
        <div className='card-widget bg-white user-card'>
          <div className='u-img img-cover img1 '></div>
          <div className='u-content'>
            <div className='avatar box-80'>
              <img
                className='img-responsive img-circle img-70 shadow-white'
                src={profile_img}
                alt=''
              />
              <i className='fa fa-circle-o fa-green'></i>
            </div>
            <h5>{name} </h5>
            <p className='text-muted'>{position} </p>
          </div>
          <div className='user-social-profile'>
            <ul>
              <li>
                <a href='/'>
                  <i className='fa fa-facebook'></i>
                </a>
              </li>
              <li>
                <a href='/'>
                  <i className='fa fa-google-plus'></i>
                </a>
              </li>
              <li>
                <a href='/'>
                  <i className='fa fa-twitter'></i>
                </a>
              </li>
              <li>
                <a href='/'>
                  <i className='fa fa-instagram'></i>
                </a>
              </li>
              <li>
                <a href='/'>
                  <i className='fa fa-linkedin'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
MemberCardItem.propTypes = {
  memberData: PropTypes.object.isRequired
};
export default MemberCardItem;
