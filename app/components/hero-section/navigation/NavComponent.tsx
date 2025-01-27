import React, { useState, useEffect } from 'react';
import NavItemComponent from './NavItemComponent';
import FyndoLogo from './../../../assets/fyndo-logo.png';

interface NavItem {
  _id: string;
  text: string;
  slug: { current: string };
}

const NavComponent: React.FC = () => {
  const [navItems, setNavItems] = useState<NavItem[]>([
    { _id: '1', text: 'Intro', slug: { current: 'intro' } },
    { _id: '2', text: 'Truth', slug: { current: 'truth' } },
    { _id: '3', text: 'Features', slug: { current: 'features' } },
    { _id: '4', text: 'Team', slug: { current: 'team' } },
    { _id: '5', text: 'FaQ', slug: { current: 'faq' } },
    { _id: '6', text: 'Support', slug: { current: 'support' } },
  ]);

  useEffect(() => {
    setNavItems(navItems);
  }, []);

  const handleScrollToSection = (slug: string) => {
    const section = document.getElementById(slug);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex items-center bg-blured-bg rounded-full px-1.5 py-2.5">
      <img className="fyndo-logo" src={FyndoLogo} alt="Fyndo Logo" />
      {navItems.map((item) => (
        <NavItemComponent
          key={item._id}
          text={item.text}
          onClick={() => handleScrollToSection(item.slug.current)}
        />
      ))}
    </div>
  );
};

export default NavComponent;
