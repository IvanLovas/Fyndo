import React from 'react';
import ModalCardComponent from './ModalCardComponent';
import ModalStepIndicator from './ModalStepIndicator';
import ModalLabel from './ModalLabelComponent';
import Button from '../shared/ButtonComponent';

const ModalComponent: React.FC = () => {
  return (
    <div className='modal-container'>
      <div className="modal-header">
        <p className="font-semibold">Plan type</p>
        <p>Choose the computer and memory resources for your needs</p>
      </div>

      <div className="modal-content">
        <ModalCardComponent
          title="Estimation Package" 
          price="499$" 
          description="Choose the computer and memory resources for your needs"
          detail="No AI & 72 hours, real humans work on your estimation"
        />
        <ModalCardComponent
          title="Estimation Package" 
          price="499$" 
          description="Choose the computer and memory resources for your needs"
          detail="No AI & 72 hours, real humans work on your estimation"
        />
      </div>

      <ModalStepIndicator />

      <div className="p-5 mt-5">
        <ModalLabel label="72 hours delivery" />
        <ModalLabel label="72 hours delivery" />
        <ModalLabel label="Experts" />
        <ModalLabel label="72 hours delivery" />
        <ModalLabel label="72 hours delivery" />
      </div>

      <div className="flex flex-1 justify-center">
        <Button label="Select Plan and Continue" href="#" />
      </div>
    </div>
  );
};

export default ModalComponent;
