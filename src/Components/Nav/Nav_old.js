import "./Nav_old.css";
import React, { Component } from "react";
import { Link } from "react-scroll";

export default function Nav() {
  return (
    <div className="nav">
      <div className="logo">LOGO</div>
      <div className="NavButtons">
        <li className="NavLink">
          <Link to="about" spy={true} smooth={true}>
            About
          </Link>
        </li>

        <li className="NavLink">
          <Link to="sevices" spy={true} smooth={true}>
            services
          </Link>
        </li>

        <li className="NavLink">
          <Link to="contact" spy={true} smooth={true}>
            contact
          </Link>
        </li>
      </div>
    </div>
  );
}
