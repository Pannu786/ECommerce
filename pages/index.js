import React from 'react';

import { Product, FooterBanner, HeroBanner } from '../components';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className='products-heading'>
        <h2>Best of Best Products here</h2>
        <p>Speaker are boom here mate</p>
      </div>
      <div className='products-container'>
        {['Product1', 'Product2'].map((pro) => pro)}
      </div>
      <FooterBanner />
    </>
  );
};

export default Home;
