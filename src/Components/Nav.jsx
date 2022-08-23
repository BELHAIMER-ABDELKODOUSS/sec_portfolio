import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <header>
        <div>
          <Link to="/" className="capture">
            capture
          </Link>
        </div>
        <div className="right-header">
          <Link to="/">1.About Us</Link>
          <Link to="/ourwork">2.Our Work</Link>
          <Link to="/contact">3.Contact Us</Link>
        </div>
      </header>
    </div>
  );
};

export default Nav;
