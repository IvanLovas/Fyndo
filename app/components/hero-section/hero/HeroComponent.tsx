import React from 'react';
import IconContainerComponent from './../../shared/IconContainerComponent';
import Button from './../../shared/ButtonComponent';
import arrowImg from './../../../assets/arrow.png';

const paragraphOne = 'Empower Founders.'
const paragraphTwo = ' We help non-technical founders,'
const paragrahpThree = ' achieve IT transparency with a fixed-price package covering estimate reviews, developer screening, and onboarding. Seasoned experts— Veteran CTOs and Tech Leads—ensure clarity in the black box.'

const HeroComponent: React.FC = () => {
  return (
    <div className='flex flex-col items-start mb-16'>
      <h1 className="text-4xl mb-12 mt-12 sm:text-5xl md:text-6xl">{paragraphOne}<br />{paragraphTwo}</h1>
      <h2 className="text-md md:text-lg mb-8">{paragrahpThree}</h2>
      <IconContainerComponent />
      <Button label="Discover more" href="#" iconSrc={arrowImg} />
    </div>
  );
};

export default HeroComponent;
