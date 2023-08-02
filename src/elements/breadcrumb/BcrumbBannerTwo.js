/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import Tilty from "react-tilty";
import ProjectData from "../../data/project/ProjectData.json";
import { slugify } from "../../utils";

const BcrumbBannerTwo = ({ title, paragraph, mainThumb, projectUrl }) => {
  const allProjectData = ProjectData;
  const params = useParams();
  const projectSlug = params.slug;

  const getProjectData = allProjectData.filter(
    (data) => slugify(data.title) === projectSlug
  );
  const detailsProject = getProjectData[0];

  let viewProject;

  if (detailsProject.cta != null) {
    viewProject = (
      <a href={detailsProject.cta} target='_blank'>
        <button class='learn-more'>
          <span class='circle' aria-hidden='true'>
            <span class='icon arrow'></span>
          </span>
          <span class='button-text'>View Project</span>
        </button>
      </a>
    );
  }

  return (
    <div className='breadcrum-area breadcrumb-banner single-breadcrumb'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className='section-heading heading-left'>
              <h1
                className='title h2'
                dangerouslySetInnerHTML={{ __html: title }}
              ></h1>
              <p dangerouslySetInnerHTML={{ __html: paragraph }}></p>
              <div className='projectDetailsBtn'>{viewProject}</div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='banner-thumbnail'>
              <Tilty perspective={2000} reset={false}>
                <img
                  src={process.env.PUBLIC_URL + mainThumb}
                  alt='Illustration'
                />
              </Tilty>
            </div>
          </div>
        </div>
      </div>
      <ul className='shape-group-8 list-unstyled'>
        <li className='shape shape-1'>
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-9.png"}
            alt='Bubble'
          />
        </li>
        <li className='shape shape-2'>
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-20.png"}
            alt='Bubble'
          />
        </li>
        <li className='shape shape-3'>
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-4.png"}
            alt='Line'
          />
        </li>
      </ul>
    </div>
  );
};

export default BcrumbBannerTwo;
