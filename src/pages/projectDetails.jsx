/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import HeaderOne from "../common/header/HeaderOne";
import BcrumbBannerTwo from "../elements/breadcrumb/BcrumbBannerTwo";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import { slugify } from "../utils";
import ProjectData from "../data/project/ProjectData.json";
import VideoOne from "../component/video/VideoOne";
import Accordion from "react-bootstrap/Accordion";
import { FaCompress } from "react-icons/fa";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SEO from "../common/SEO";

const allProjectData = ProjectData;

const ProjectDetails = () => {
  const params = useParams();
  const projectSlug = params.slug;

  const getProjectData = allProjectData.filter(
    (data) => slugify(data.title) === projectSlug
  );
  const detailsProject = getProjectData[0];

  let VideoDiv;
  let cta;

  if (detailsProject.video != null) {
    VideoDiv = (
      <VideoOne
        thumbImage={detailsProject.videoThumbImage}
        url={detailsProject.video}
      />
    );
    console.log(detailsProject.accordian.map((data, index) => index));
  }

  if (detailsProject.cta != null) {
    cta = (
      <a
        href={detailsProject.cta}
        target='_blank'
        rel='noopener noreferrer'
        className='axil-btn btn-fill-primary'>
        CTA
      </a>
    );
  }

  return (
    <>
      <SEO title='Project Details' />
      <ColorSwitcher />
      <main className='main-wrapper'>
        <HeaderOne />
        <BcrumbBannerTwo
          title={detailsProject.title}
          paragraph={detailsProject.excerpt}
          mainThumb={detailsProject.image}
        />
        <section className='section-padding single-portfolio-area'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-5'>
                <div className='section-heading heading-left mb-0'>
                  <span className='subtitle'>
                    {detailsProject.category.map((cat, i) => (
                      <span key={i}>{cat}</span>
                    ))}
                  </span>
                  <h3 className='title'>{detailsProject.DescTitle}</h3>
                </div>
                {detailsProject.body.map((para, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: para }}></p>
                ))}
                {cta}
              </div>
              <div className='col-lg-6 offset-xl-1'>
                <div className='why-choose-us'>
                  {detailsProject.accordian.map((data, index) => (
                    <Accordion defaultActiveKey={0}>
                      <Accordion.Item eventKey={index}>
                        <Accordion.Header>
                          <FaCompress />
                          {data.title}
                        </Accordion.Header>
                        <Accordion.Body>{data.description}</Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {VideoDiv}
        <CtaLayoutOne />
      </main>
    </>
  );
};

export default ProjectDetails;
