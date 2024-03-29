/** @format */

import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SEO from "../common/SEO";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import ProjectOne from "../component/project/ProjectOne";

const ProjectGridOne = () => {
  return (
    <>
      <SEO title='Project' />
      <ColorSwitcher />
      <main className='main-wrapper'>
        <HeaderOne />
        <BcrumbBannerOne
          title='Our Projects'
          paragraph='A quick view of industry specific problems solved with design by the awesome team at Evocation IT.
                '
          styleClass=''
          mainThumb='/images/project/hero-project.png'
        />
        <ProjectOne />
        <CtaLayoutOne />
      </main>
    </>
  );
};

export default ProjectGridOne;
