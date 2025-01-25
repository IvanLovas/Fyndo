import React from 'react'

interface ContainerComponentProps {
    children: React.ReactNode;
    styles: string
  }
  
  const ContainerComponent: React.FC<ContainerComponentProps> = ({ children, styles }) => {
    return <div className={`h-full ${styles}`}>{children}</div>;
  }

export default ContainerComponent