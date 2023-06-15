/** @format */

import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhone,
  FaMailBulk,
} from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const OffcanvasMenu = ({ offcanvasShow, offcanvasHide }) => {
  return (
    <Offcanvas
      show={offcanvasShow}
      onHide={offcanvasHide}
      placement='end'
      className='header-offcanvasmenu'>
      <Offcanvas.Header closeButton></Offcanvas.Header>
      <Offcanvas.Body>
        {/* <form action='#' className='side-nav-search-form'>
          <div className='form-group'>
            <input
              type='text'
              className='search-field'
              name='search-field'
              placeholder='Search...'
            />
            <button className='side-nav-search-btn'>
              <i className='fas fa-search'></i>
            </button>
          </div>
        </form> */}
        <div className='row '>
          <div className='col-lg-5 col-xl-6'>
            <ul className='main-navigation list-unstyled'>
              <li>
                <HashLink to={"/services#section1"}>Design</HashLink>
              </li>
              <li>
                <HashLink to={"/services#section2"}>Development</HashLink>
              </li>
              <li>
                <HashLink to={"/services#section3"}>Marketing</HashLink>
              </li>
              <li>
                <HashLink to={"/services#section4"}>Business</HashLink>
              </li>
              <li>
                <HashLink to={"/services#section5"}>Technology</HashLink>
              </li>
              <li>
                <HashLink to={"/services#section6"}>Improvement</HashLink>
              </li>
            </ul>
          </div>
          <div className='col-lg-7 col-xl-6'>
            <div className='contact-info-wrap'>
              <div className='contact-inner'>
                <address className='address'>
                  <span className='title'>Our Base Location</span>
                  <p>
                    Bashundhara R/a, Vatara, <br /> Dhaka 1229, Bangladesh
                  </p>
                </address>
                <address className='address'>
                  <span className='title'>Remotely Reach Us for Inquiry</span>
                  <a href='tel:8884562790' className='tel'>
                    <FaPhone /> (+880) 1521 507 407
                  </a>
                  <a href='tel:12125553333' className='tel'>
                    <FaMailBulk /> info@evocationit.com
                  </a>
                </address>
              </div>
              <div className='contact-inner'>
                <h5 className='title'>Contact us through Socials</h5>
                <div className='contact-social-share'>
                  <ul className='social-share list-unstyled'>
                    <li>
                      <a
                        href='https://www.facebook.com/evocationit'
                        rel='noopener noreferrer'
                        target='_blank'>
                        <FaFacebookF />
                      </a>
                    </li>

                    <li>
                      <a
                        href='https://twitter.com/EvocationIt'
                        rel='noopener noreferrer'
                        target='_blank'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.linkedin.com/company/evocation-it/'
                        rel='noopener noreferrer'
                        target='_blank'>
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://wa.me/8801521507407'
                        rel='noopener noreferrer'
                        target='_blank'>
                        <FaWhatsapp />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffcanvasMenu;
