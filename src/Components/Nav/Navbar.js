import React, { useState } from "react";
import { Link } from "react-scroll";

import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const isClicked = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        LOGO
        {/* React <i className="fab fa-react"></i> */}
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <div className={active ? "fas fa-times" : "fas fa-bars"}></div>
      </div>
      {/* active sitebar */}
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {/* testing */}

        <li>
          <Link
            className="nav-links"
            to="about"
            spy={true}
            // duration={300}
            smooth={true}
            onClick={isClicked}
          >
            about
          </Link>
        </li>

        <li>
          <Link
            className="nav-links"
            to="sevices"
            spy={true}
            // duration={300}
            smooth={true}
            onClick={isClicked}
          >
            services
          </Link>
        </li>

        <li>
          <Link
            className="nav-links"
            to="contact"
            spy={true}
            // duration={300}
            smooth={true}
            onClick={isClicked}
          >
            contact
          </Link>
        </li>

        {/* testing end */}
      </ul>
    </nav>
  );
};

export default Navbar;
