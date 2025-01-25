import React from 'react';

interface ButtonProps {
  label: string;
  href: string;
  iconSrc: string;
}

const Button: React.FC<ButtonProps> = ({ label, href, iconSrc }) => {
  return (
    <a href={href} className="flex items-center justify-center bg-button text-black rounded-full px-6 py-3 mt-10">
      {label}
      <span>
        <img className='w-3' src={iconSrc} alt="arrow icon" />
      </span>
    </a>
  );
};

export default Button;
