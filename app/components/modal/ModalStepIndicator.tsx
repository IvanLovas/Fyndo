import React from 'react';

import arrowRightImg from './../../assets/arrow-right.png';

const ModalStepIndicator: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-3 step-container">
      <img className="arrow-right" src={arrowRightImg} alt="Step 1" />
      <span>Select Your Plan</span>
      <img className="arrow-right" src={arrowRightImg} alt="Step 2" />
      <span>Send Your Documents</span>
      <img className="arrow-right" src={arrowRightImg} alt="Step 3" />
      <span>Receive Feedback</span>
    </div>
  );
};

export default ModalStepIndicator;
