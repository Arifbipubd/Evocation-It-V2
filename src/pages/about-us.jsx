/** @format */

import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/SEO";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import ProcessOne from "../component/process/ProcessOne";
import AboutFour from "../component/about/AboutFour";
import BrandOne from "../component/brand/BrandOne";

const AboutUs = () => {
  return (
    <>
      <SEO title='About us' />
      <ColorSwitcher />
      <main className='main-wrapper'>
        <HeaderOne />
        <BcrumbBannerOne
          title='One of the fastest growing agency'
          paragraph='We design and develop web and mobile applications for our clients worldwide.'
          styleClass='thumbnail-4'
          mainThumb='/images/about/hero-about.png'
        />
        <AboutFour />
        {/* <AboutThree /> */}
        {/* <AboutFive /> */}
        <ProcessOne />
        <BrandOne />
        <CtaLayoutOne />
        <FooterOne parentClass='' />
      </main>
    </>
  );
};

export default AboutUs;
