import React from 'react';
import stepOneIcon from '../../assets/step-1-icon.png';
import stepTwoIcon from '../../assets/airplane.png';
import stepThreeIcon from '../../assets/stars.png';
import stepFourIcon from '../../assets/square.png';

// Step Component (for each step)
const Step = ({
  stepData,
  highlightedIndex,
  index,
}: {
  stepData: { step: string; title: string; description: string; icon: string };
  highlightedIndex: number;
  index: number;
}) => {
  return (
    <div
      className="highlight-div flex"
      style={highlightedIndex === index ? { opacity: 1 } : {}}
    >
      <div className="flex items-start">
        <div className="rotate-text text-xs">{stepData.step}</div>
        <div className="gradient-measure-container">
            <div className="gradient-measure"></div>
        </div>
        <div className="step-icon">
          <img src={stepData.icon} alt={`${stepData.title} Icon`} />
        </div>
      </div>
      <div className="step-description">
        <h1 className="mb-2.5">{stepData.title}</h1>
        <p>{stepData.description}</p>
      </div>
    </div>
  );
};

// Main StepsComponent
const StepsComponent = ({ highlightedIndex }: { highlightedIndex: number }) => {
  const steps = [
    {
        step: 'Step 1',
      title: 'Select Your Plan',
      description: 'As tech experts, we bring hands-on experience in solving real-world challenges. We understand complex technical hurdles, optimize costs, and streamline business operations, minimizing risks. Our support empowers your vision, driving efficiency and growth. Choose us for unmatched expertise.',
      icon: stepOneIcon,
    },
    {
        step: 'Step 2',
      title: 'Select Your Plan',
      description: 'As tech experts, we bring hands-on experience in solving real-world challenges. We understand complex technical hurdles, optimize costs, and streamline business operations, minimizing risks. Our support empowers your vision, driving efficiency and growth. Choose us for unmatched expertise.',
      icon: stepTwoIcon,
    },
    {
        step: 'Step 3',
      title: 'Select Your Plan',
      description: 'As tech experts, we bring hands-on experience in solving real-world challenges. We understand complex technical hurdles, optimize costs, and streamline business operations, minimizing risks. Our support empowers your vision, driving efficiency and growth. Choose us for unmatched expertise.',
      icon: stepThreeIcon,
    },
    {
        step: 'Step 4',
      title: 'Select Your Plan',
      description: 'As tech experts, we bring hands-on experience in solving real-world challenges. We understand complex technical hurdles, optimize costs, and streamline business operations, minimizing risks. Our support empowers your vision, driving efficiency and growth. Choose us for unmatched expertise.',
      icon: stepFourIcon,
    },
  ];

  return (
    <div className="steps-container">
      {steps.map((step, index) => (
        <Step
          key={index}
          stepData={step}
          highlightedIndex={highlightedIndex}
          index={index}
        />
      ))}
    </div>
  );
};

export default StepsComponent;
