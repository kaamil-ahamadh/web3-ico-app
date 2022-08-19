import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="hidden sm:inline">
      <Link to="/" className="navbar-title">
        Home
      </Link>
      <Link to="/token" className="navbar-title">
        Token
      </Link>
      <Link to="/transaction" className="navbar-title">
        Transaction
      </Link>
      <Link to="/tokenDistribution" className="navbar-title">
        Token Distribution
      </Link>
      <Link to="/faucet" className="navbar-title">
        Faucet
      </Link>
      <Link to="/faq" className="navbar-title">
        Faq
      </Link>
      <Link to="/contact" className="navbar-title">
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
