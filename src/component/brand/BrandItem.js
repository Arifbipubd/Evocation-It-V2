/** @format */

import React from "react";

const Data = [
  {
    image: "/images/brand/activarmor.png",
  },
  {
    image: "/images/brand/agathians.png",
  },
  {
    image: "/images/brand/asbc.png",
  },
  {
    image: "/images/brand/dorjaropashe.png",
  },
  {
    image: "/images/brand/efoo.png",
  },
  {
    image: "/images/brand/farooq.png",
  },
  {
    image: "/images/brand/invicta.png",
  },
  {
    image: "/images/brand/kbh.png",
  },
  {
    image: "/images/brand/koketa.png",
  },
  {
    image: "/images/brand/leadpedia.png",
  },
  {
    image: "/images/brand/linearity.png",
  },
  {
    image: "/images/brand/lush.png",
  },
  {
    image: "/images/brand/multibrand.png",
  },
  {
    image: "/images/brand/narayani.png",
  },
  {
    image: "/images/brand/noboit.png",
  },
  {
    image: "/images/brand/notunera.png",
  },
  {
    image: "/images/brand/oasis-agro.png",
  },
  {
    image: "/images/brand/oasis-group.png",
  },
  {
    image: "/images/brand/perkymoth.png",
  },
  {
    image: "/images/brand/rainforest.png",
  },
  {
    image: "/images/brand/sabirnoor.png",
  },
  {
    image: "/images/brand/sanisai.png",
  },
  {
    image: "/images/brand/sonic.png",
  },
  {
    image: "/images/brand/ssglobal.png",
  },
];

const BrandItem = () => {
  return (
    <>
      {Data.map((data, index) => (
        <div className='col-lg-3 col-6' key={index}>
          <div className='brand-grid'>
            <img src={process.env.PUBLIC_URL + data.image} alt='Brand' />
          </div>
        </div>
      ))}
    </>
  );
};

export default BrandItem;
