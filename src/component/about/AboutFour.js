/** @format */

import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";

const AboutFour = () => {
  return (
    <div className='section section-padding case-study-featured-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-7 col-lg-6'>
            <div className='case-study-featured-thumb text-start'>
              <img
                src={process.env.PUBLIC_URL + "/images/about/about intro.png"}
                alt='travel'
              />
            </div>
          </div>
          <div className='col-xl-5 col-lg-6'>
            <div className='case-study-featured'>
              <div className='section-heading heading-left'>
                <span className='subtitle'>Who we are</span>
                <h2 className='title'>Building software for world changers</h2>
                <p>
                  Evocation IT takes pride in our rapid growth and exceptional
                  track record as one of the fastest-growing web development
                  agencies in the industry. With a proven history of delivering
                  remarkable results, our expert team combines cutting-edge
                  technology, innovative strategies, and a client-centric
                  approach. We have earned a reputation for excellence,
                  reliability, and unparalleled customer satisfaction.
                </p>
                <p>
                  Our dedication to staying at the forefront of the digital
                  landscape allows us to continuously push boundaries and
                  provide our clients with advanced and impactful web solutions.
                  Join us on this exciting journey and experience firsthand the
                  power of growth-driven web development.
                </p>
                <h4 className='partnershipTitle'>In Partnership With</h4>
              </div>
              <div className='case-study-counterup'>
                <div className='single-counterup'>
                  <h2 className='count-number'>
                    <TrackVisibility once>
                      {({ isVisible }) => (
                        <span className='number count'>
                          {isVisible ? <CountUp end='10' duration={1} /> : null}
                        </span>
                      )}
                    </TrackVisibility>
                    <span className='symbol'>+</span>
                  </h2>
                  <span className='counter-title'>Years on the market</span>
                </div>
                <div className='single-counterup'>
                  <h2 className='count-number'>
                    <TrackVisibility once>
                      {({ isVisible }) => (
                        <span className='number count'>
                          {isVisible ? (
                            <CountUp end='1500' duration={1} />
                          ) : null}
                        </span>
                      )}
                    </TrackVisibility>
                    <span className='symbol'>+</span>
                  </h2>
                  <span className='counter-title'>
                    Projects delivered so far
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFour;
