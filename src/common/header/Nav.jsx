/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className='mainmenu-nav'>
      <ul className='mainmenu'>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li className='menu-item-has-children'>
          <Link to='/services'>
            Services <FaAngleDown />{" "}
          </Link>
          <ul className='axil-submenu'>
            <li>
              <Link to={"/services/service-details"}>Single Service 1</Link>
            </li>
            <li>
              <Link to={"/services/service-details"}>Single Service 2</Link>
            </li>
            <li>
              <Link to={"/services/service-details"}>Single Service 3</Link>
            </li>
            <li>
              <Link to={"/services/service-details"}>Single Service 4</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={"/portfolio"}>Works</Link>
        </li>
        <li>
          <Link to={"/blog"}>Articles</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
