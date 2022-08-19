import { useState } from "react";
import { CgMenuRound, CgCloseO } from "react-icons/cg";
import { Link } from "react-router-dom";

const NavbarMobile = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="sm:hidden flex flex-1 justify-start items-center">
      <nav>
        <div onClick={() => setIsNavOpen((prevState) => !prevState)}>
          {isNavOpen ? (
            <CgCloseO size={32} color="cyan" />
          ) : (
            <CgMenuRound size={32} color="cyan" />
          )}
        </div>

        {/* Links */}
        <div
          className={`${
            isNavOpen ? `flex` : `hidden`
          } flex-col p-6 bg-black-gradient absolute top-20 left-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
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
      </nav>
    </div>
  );
};

export default NavbarMobile;
