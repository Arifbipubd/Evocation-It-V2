/** @format */
import React from "react";
import LocationData from "../../data/contact/LocationData.json";
import { FaFacebookF, FaMailBulk, FaPhoneAlt } from "react-icons/fa";

const allData = LocationData;

const ContactLocation = () => {
  return (
    <>
      {allData.map((data, index) => (
        <div className='col-lg-3 col-sm-6' key={index}>
          <div className='office-location'>
            <div className='thumbnail'>
              <img src={process.env.PUBLIC_URL + data.thumb} alt='Office' />
            </div>
            <div className='content'>
              <h4 className='title'>{data.title}</h4>
              <p className='mb-2'>{data.address}</p>
            </div>
            <div className='contact-social-share'>
              <ul className='social-share list-unstyled'>
                <li>
                  <a
                    href={data.facebookLink}
                    rel='noopener noreferrer'
                    target='_blank'>
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a
                    href={data.Email}
                    rel='noopener noreferrer'
                    target='_blank'>
                    <FaMailBulk />
                  </a>
                </li>
                <li>
                  <a
                    href={data.Phone}
                    rel='noopener noreferrer'
                    target='_blank'>
                    <FaPhoneAlt />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactLocation;
