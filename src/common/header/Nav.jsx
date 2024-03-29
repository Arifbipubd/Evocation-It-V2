/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className='mainmenu-nav'>
      <ul className='mainmenu'>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li className='menu-item-has-children'>
          <Link to='/services'>Services </Link>
          {/* <ul className='axil-submenu'>
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
          </ul> */}
        </li>
        <li>
          <Link to={"/portfolio"}>Works</Link>
        </li>
        {/* <li>
          <Link to={"/blog"}>Articles</Link>
        </li> */}
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
