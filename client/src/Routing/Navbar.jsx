import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return <>
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/home">
            דף הבית
          </NavLink>
        </li>
        <li>
          <NavLink to="/users">
            צפייה במשתמשים
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-bookings">
            השיבוצים שלי
          </NavLink>
        </li>
      </ul>
      <div className="navbar-logo">
        <Link to="/">מערכת שיבוץ חדרים</Link>
      </div>
      </nav>
  </>
};

