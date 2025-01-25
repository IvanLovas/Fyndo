import React from 'react'

interface LayoutComponentProps {
    children: React.ReactNode;
  }
  
  const LayoutComponent: React.FC<LayoutComponentProps> = ({ children }) => {
    return <div className="flex h-screen w-screen">{children}</div>;
  }

export default LayoutComponent