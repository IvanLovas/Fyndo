import React from 'react';
import IconComponent from './IconComponent';

import reactImg from './../../assets/react.png';
import aaImg from './../../assets/aa.png';
import sImg from './../../assets/s.png';
import nextjsImg from './../../assets/next-js.png';
import terraformImg from './../../assets/terraform-enterprise.png';
import wordpressImg from './../../assets/wordpress.png';
import graphqlImg from './../../assets/graphql.png';
import kubernetsImg from './../../assets/kubernets.png';
import liefImg from './../../assets/lief.png';
import kasiImg from './../../assets/kasi.png';
import plusImg from './../../assets/plus.png';
import shopifyImg from './../../assets/shopify.png';
import tImg from './../../assets/t.png';
import bearImg from './../../assets/bear.png';

interface IconContainerComponentProps {
  big?: boolean;
  layout?: 'single';
}

const IconContainerComponent: React.FC<IconContainerComponentProps> = ({ big = false, layout }) => {
  const icons = [
    { imgSrc: reactImg, alt: 'React' },
    { imgSrc: aaImg, alt: 'AA' },
    { imgSrc: sImg, alt: 'S' },
    { imgSrc: plusImg, alt: 'Plus'},
    { imgSrc: shopifyImg, alt: 'Shopify'},
    { imgSrc: nextjsImg, alt: 'NextJS' },
    { imgSrc: terraformImg, alt: 'Terraform' },
    { imgSrc: tImg, alt: 'T'},
    { imgSrc: wordpressImg, alt: 'WordPress' },
    { imgSrc: graphqlImg, alt: 'GraphQL' },
    { imgSrc: kubernetsImg, alt: 'Kubernetes' },
    { imgSrc: liefImg, alt: 'Lief' },
    { imgSrc: bearImg, alt: 'Bear'}
  ];

  const iconsToRender = layout === 'single' ? [{ imgSrc: kasiImg, alt: 'Kasi' }] : icons;

  return (
    <div className="flex mb-2 items-center flex-wrap">
      {iconsToRender.map((icon, index) => (
        <React.Fragment key={index}>
          <IconComponent imgSrc={icon.imgSrc} alt={icon.alt} big={big} />
          {layout === 'single' && (
            <span className="mt-2 text-xxs text-center">CTO</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default IconContainerComponent;
