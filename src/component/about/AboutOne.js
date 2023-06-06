/** @format */

import React from "react";
import FormOne from "../contact/FormOne";

const AboutOne = () => {
  return (
    <section className='section section-padding-equal bg-color-light'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className='about-us'>
              <div className='section-heading heading-left mb-0'>
                <span className='subtitle'>About Us</span>
                <h2 className='title mb--40'>
                  We do design, code &amp; develop.
                </h2>
                <p>
                  At Evocation IT, we are a dynamic team of designers, coders,
                  and developers driven by a passion for innovation. With
                  meticulous attention to detail and a deep understanding of
                  user experience, we create visually stunning designs that
                  engage and inspire. Our coding expertise ensures flawless
                  functionality and seamless user interactions. From front-end
                  development to back-end implementation, we bring your ideas to
                  life with precision and skill.{" "}
                </p>
                <p>
                  With a customer-centric approach, we strive to exceed
                  expectations, delivering websites and applications that make a
                  lasting impact. Let us transform your digital vision into
                  reality.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className='col-xl-5 col-lg-6 offset-xl-1'>
            <div className='contact-form-box'>
              <h3 className='title'>Get a free Keystroke quote now</h3>
              <FormOne />
            </div>
          </div>
        </div>
      </div>
      <ul className='shape-group-6 list-unstyled'>
        <li className='shape shape-1'>
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-7.png"}
            alt='Bubble'
          />
        </li>
        <li className='shape shape-2'>
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-4.png"}
            alt='line'
          />
        </li>
        <li className='shape shape-3'>
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-5.png"}
            alt='line'
          />
        </li>
      </ul>
    </section>
  );
};

export default AboutOne;
