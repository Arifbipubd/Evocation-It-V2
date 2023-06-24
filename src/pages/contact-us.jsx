/** @format */

import React from "react";
import SEO from "../common/SEO";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import HeaderOne from "../common/header/HeaderOne";
import BreadCrumbOne from "../elements/breadcrumb/BreadCrumbOne";
import FormTwo from "../component/contact/FormTwo";
import ContactLocation from "../component/contact/ContactLocation";
import SectionTitle from "../elements/section-title/SectionTitle";

const Contact = () => {
  return (
    <>
      <SEO title='Blog Grid' />
      <ColorSwitcher />
      <main className='main-wrapper'>
        <HeaderOne />
        <BreadCrumbOne title='Contact' page='Contact' />

        <div className='section section-padding'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-5 col-lg-6'>
                <div className='contact-form-box shadow-box mb--30'>
                  <h3 className='title'>
                    Fill the form and relax, we will get back to you within a
                    day.
                  </h3>
                  <FormTwo />
                </div>
              </div>
              <div className='col-xl-5 col-lg-6 offset-xl-1'>
                <div className='contact-info mb--100 mb_md--30 mt_md--0 mt--150'>
                  <h4 className='title'>Phone</h4>
                  <p>
                    Our support team is available on Sun-Thu, 10:00 am to 6:00
                    pm (GMT+06)
                  </p>
                  <h4 className='phone-number'>
                    <a href='tel:+8801521507407'>(+88)01521 507 407</a>
                  </h4>
                </div>
                <div className='contact-info mb--30'>
                  <h4 className='title'>Email</h4>
                  <p>
                    Our support team will get back to in 48-h during standard
                    business hours.
                  </p>
                  <h4 className='phone-number'>
                    <a href='mailto:info@evocationit.com'>
                      info@evocationit.com
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <ul className='list-unstyled shape-group-12'>
            <li className='shape shape-1'>
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"}
                alt='Bubble'
              />
            </li>
            <li className='shape shape-2'>
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"}
                alt='Bubble'
              />
            </li>
            <li className='shape shape-3'>
              <img
                src={process.env.PUBLIC_URL + "/images/others/circle-3.png"}
                alt='Circle'
              />
            </li>
          </ul>
        </div>

        <div className='section section-padding bg-color-dark overflow-hidden'>
          <div className='container'>
            <SectionTitle
              subtitle='Reach Us through'
              title='Socials or Our Partner Organizations'
              description=''
              textAlignment='heading-light-left'
              textColor=''
            />
            <div className='row'>
              <ContactLocation />
            </div>
          </div>
          <ul className='shape-group-11 list-unstyled'>
            <li className='shape shape-1'>
              <img
                src={process.env.PUBLIC_URL + "/images/others/line-6.png"}
                alt='line'
              />
            </li>
            <li className='shape shape-2'>
              <img
                src={process.env.PUBLIC_URL + "/images/others/circle-3.png"}
                alt='line'
              />
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Contact;
