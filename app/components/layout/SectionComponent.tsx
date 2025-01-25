import React from 'react';

interface SectionComponentProps {
  heading?: string;
  paragraph: string;
  containerClassName?: string;
  textColorClass: string;
  children: React.ReactNode;
}

const SectionComponent: React.FC<SectionComponentProps> = ({
  heading,
  paragraph,
  containerClassName = '',
  textColorClass,
  children,
}) => {
  return (
    <div className={`flex flex-col items-start px-6 py-12 ${containerClassName}`}>
      {heading ? <h2 className={`text-2xl mb-6 gradient-secondary-text ${textColorClass}`}>{heading}</h2> : null}
      <p className="mb-6">{paragraph}</p>
      <div className="space-y-2">{children}</div>
    </div>
  );
};

export default SectionComponent;