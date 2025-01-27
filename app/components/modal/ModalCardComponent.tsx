import React from 'react';
import "./../../tailwind.css";

interface ModalCardComponentProps {
  title: string;
  price: string;
  description: string;
  detail: string;
}

const ModalCardComponent: React.FC<ModalCardComponentProps> = ({ title, price, description, detail }) => {
  return (
    <div className="flex modal-card">
      <div className="p-2.5">
      <label className="circle-checkbox">
        <input type="checkbox" />
        <span className="circle"></span>
        </label>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-center">
          <span className="font-semibold">{title}</span>
          <span className="font-semibold">{price}</span>
        </div>
        <p>{description}</p>
        <div>
          <span>icon</span>
          <span className="font-semibold">{detail}</span>
        </div>
      </div>
    </div>
  );
};

export default ModalCardComponent;
