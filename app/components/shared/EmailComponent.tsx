import React from 'react';

interface EmailComponentProps {
}

const EmailComponent: React.FC<EmailComponentProps> = () => {
  return (
   <div className='flex flex-col'>
    <span>E-MAIL</span>
    <span>Support@company.com</span>
   </div>
  );
};

export default EmailComponent;
