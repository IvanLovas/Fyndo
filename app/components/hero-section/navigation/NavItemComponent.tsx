import React from 'react';

interface NavItemComponentProps {
  text: string;
  onClick: () => void;
}

const NavItemComponent: React.FC<NavItemComponentProps> = ({ text, onClick }) => {
  return (
    <div className="nav-item flex px-1.5 cursor-pointer" onClick={onClick}>
      <span className="nav-item-text text-xs">{text}</span>
    </div>
  );
};

export default NavItemComponent;
