import React from 'react'
import ProductMenuComponent from '../AtributComponent/ProductMenuComponent'
import Component3B from '../AtributComponent/Component3B'
import TentangGo from '../AtributComponent/TentangGo'

const AboutSection = () => {
  return (
    <div className="bg-secondary-graylight-100 relative">
      <ProductMenuComponent />
      <div className="container mx-auto px-2 sm:px-0">
        <Component3B />
        <TentangGo />
      </div>
    </div>
  );
};

export default AboutSection;
