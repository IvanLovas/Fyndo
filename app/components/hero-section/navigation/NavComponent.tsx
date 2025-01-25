import React from 'react'
import NavItemComponent from './NavItemComponent';

interface NavComponentProps {
    
  }
  
  const NavComponent: React.FC<NavComponentProps> = () => {
    return <div className="flex bg-blured-bg rounded-full px-1.5 py-2.5">
        <NavItemComponent text="Intro"/>
        <NavItemComponent text="Truth"/>
        <NavItemComponent text="Features"/>
        <NavItemComponent text="Team"/>
        <NavItemComponent text="FaQ"/>
        <NavItemComponent text="Support"/>
    </div>;
  }

export default NavComponent