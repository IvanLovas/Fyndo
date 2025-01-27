import React from 'react'

interface LayoutComponentProps {
    children: React.ReactNode;
  }
  
  const LayoutComponent: React.FC<LayoutComponentProps> = ({ children }) => {
    return <div className="h-full">
        <div className="flex flex-col md:flex-row">{children}</div>
      </div>
  }

export default LayoutComponent