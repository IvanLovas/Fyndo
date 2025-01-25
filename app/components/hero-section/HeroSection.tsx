import React from 'react'
import NavComponent from './navigation/NavComponent';
import HeroComponent from './hero/HeroComponent';


interface HeroSectionProps {
    
  }
  
  const HeroSection: React.FC<HeroSectionProps> = ({ }) => {
    return <div className="flex flex-col items-start px-8 py-12">
        <NavComponent />
        <HeroComponent />
    </div>;
  }

export default HeroSection