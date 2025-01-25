import React from 'react';

interface IconComponentProps {
  imgSrc: string;
  alt: string;
  big?: boolean;
}

const IconComponent: React.FC<IconComponentProps> = ({ imgSrc, alt, big = false }) => {
  const iconClass = big ? 'w-full h-full' : 'w-iconSize h-iconSize';

  return (
    <div className="flex flex-col items-center  mr-2">
      <div className="flex justify-center items-center h-9.5 w-9.5 border rounded-xxl border-grey bg-black">
        <img className={iconClass} src={imgSrc} alt={alt} />
      </div>
      
      {big && <span className="text-xs mt-2">Kasi</span>}
    </div>
  );
};

export default IconComponent;
