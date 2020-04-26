import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav-content'>
        <ul className='logo-ul'>
          <li className='logo'>
            <Link className='navbar-brand' to='/'>
              <span className='nav-title'>
                Tech <span className='nav-span'>Jobs</span>{" "}
              </span>
            </Link>
          </li>
        </ul>
        <ul className='links-ul'>
          <li>
            {" "}
            <Link to='/search?skill=&location='>Browse</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to='/search'>Search </Link>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
