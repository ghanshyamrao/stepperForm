import React, { useState } from 'react';
import { Steps, Button, Form } from 'antd';
import StepOne from './Steps/StepOne';
import './StepperForm.css'; // Import custom CSS file for styling
import StepTwo from './Steps/StepTwo';
import StepThree from './Steps/StepThree';
import FeedbackAndReviews from './Steps/FeedbackAndReviews';

const { Step } = Steps;

/**
 * StepperForm component for a multi-step form.
 * @returns {JSX.Element} StepperForm component.
 */
const StepperForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const steps = [
    { title: 'Step 1', content: <StepOne formData={formData} setFormData={setFormData} /> },
    { title: 'Step 2', content: <StepTwo formData={formData} setFormData={setFormData} /> },
    { title: 'Step 3', content: <StepThree formData={formData} setFormData={setFormData} /> },
    { title: 'Feedback', content: <FeedbackAndReviews formData={formData} setFormData={setFormData} /> },

    // Add more steps
  ];

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    // Submit form data
    console.log('Form Data:', formData);
  };

  return (
    <div className="stepper-form">
      <h1 className="stepper-form-heading">Stepper Form</h1>

      <Steps current={currentStep} className="stepper-form-steps">
        {steps.map((step, index) => (
          <Step key={index} title={step.title} />
        ))}
      </Steps>

      <div className="stepper-form-content">{steps[currentStep].content}</div>

      <div className="stepper-form-actions">
        {currentStep > 0 && (
          <Button className="stepper-form-button" onClick={handleBack}>
            Back
          </Button>
        )}
        {currentStep < steps.length - 1 ? (
          <Button className="stepper-form-button" type="primary" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button className="stepper-form-button" type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default StepperForm;
