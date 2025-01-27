import React from 'react';

interface ModalLabelProps {
  label: string;
}

const ModalLabel: React.FC<ModalLabelProps> = ({ label }) => {
  return (
    <div className="modal-label">
      <span>{label}</span>
    </div>
  );
};

export default ModalLabel;
