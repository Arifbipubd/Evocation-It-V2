/** @format */
import React from "react";
import LocationData from "../../data/contact/LocationData.json";
import {
  FaFacebookF,
  FaMailBulk,
  FaWhatsapp,
  FaLinkedin,
  FaGlobe,
  FaTwitter,
} from "react-icons/fa";

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
                <li className={`${data.facebookLink ? " d-block " : "d-none"}`}>
                  <a
                    href={data.facebookLink}
                    rel='noopener noreferrer'
                    target='_blank'>
                    <FaFacebookF />
                  </a>
                </li>
                <li className={`${data.Email ? " d-block " : "d-none"}`}>
                  <a
                    href={`mailto:${data.Email}`}
                    rel='noopener noreferrer'
                    target='_blank'>
                    <FaMailBulk />
                  </a>
                </li>
                <li className={`${data.whatsapp ? " d-block " : "d-none"}`}>
                  <a
                    href={data.whatsapp}
                    rel='noopener noreferrer'
                    target='_blank'>
                    <FaWhatsapp />
                  </a>
                </li>
                <li className={`${data.linkedin ? " d-block " : "d-none"}`}>
                  <a
                    href={data.linkedin}
                    rel='noopener noreferrer'
                    target='_blank'>
                    <FaLinkedin />
                  </a>
                </li>
                <li className={`${data.website ? " d-block " : "d-none"}`}>
                  <a
                    href={data.website}
                    rel='noopener noreferrer'
                    target='_blank'>
                    <FaGlobe />
                  </a>
                </li>
                <li className={`${data.twitter ? " d-block " : "d-none"}`}>
                  <a
                    href={data.twitter}
                    rel='noopener noreferrer'
                    target='_blank'>
                    <FaTwitter />
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
