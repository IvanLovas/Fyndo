import React from 'react';

interface SectionComponentProps {
  supHeading?: string;
  heading?: string;
  paragraph: string;
  containerClassName?: string;
  textColorClass: string;
  children: React.ReactNode;
  slug: string,
  onClick: () => void;
}

const SectionComponent: React.FC<SectionComponentProps> = ({
  supHeading,
  heading,
  paragraph,
  containerClassName = '',
  textColorClass,
  children,
  slug,
  onClick
}) => {
  return (
    <div  id={slug} className={`flex flex-col items-start px-6 py-12 mb-10 container-style ${containerClassName}`}>
      <span className='text-xs mb-1.5'>{supHeading}</span>
      {heading ? <h2 className={`text-2xl mb-6 gradient-secondary-text ${textColorClass}`}>{heading}</h2> : null}
      <p className="mb-10">{paragraph}</p>
      <div className="space-y-2">{children}</div>
    </div>
  );
};

export default SectionComponent;