import React from 'react'

interface NavItemComponentProps {
    text: string
}
  
  const NavItemComponent: React.FC<NavItemComponentProps> = ({text }) => {
    return <div className="flex px-1.5">
        <span className="text-xs">{text}</span>
       </div>;
  }

export default NavItemComponent