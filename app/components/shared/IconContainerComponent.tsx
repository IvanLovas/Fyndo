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

interface IconContainerComponentProps {
  big?: boolean;
  layout?: 'single';
}

const IconContainerComponent: React.FC<IconContainerComponentProps> = ({ big = false, layout }) => {
  const icons = [
    { imgSrc: reactImg, alt: 'React' },
    { imgSrc: aaImg, alt: 'AA' },
    { imgSrc: sImg, alt: 'S' },
    { imgSrc: nextjsImg, alt: 'NextJS' },
    { imgSrc: terraformImg, alt: 'Terraform' },
    { imgSrc: wordpressImg, alt: 'WordPress' },
    { imgSrc: graphqlImg, alt: 'GraphQL' },
    { imgSrc: kubernetsImg, alt: 'Kubernetes' },
    { imgSrc: liefImg, alt: 'Lief' }
  ];

  const iconsToRender = layout === 'single' ? [{ imgSrc: kasiImg, alt: 'Kasi' }] : icons;

  return (
    <div className="flex mb-2 items-center">
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
