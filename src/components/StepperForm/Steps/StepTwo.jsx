import React from 'react';
import { Form, Input, Card } from 'antd';
import './StepOne.css'

/**
 * StepTwo component for the second step of the stepper form.
 * @param {object} props - Component props.
 * @returns {JSX.Element} StepTwo component.
 */
const StepTwo = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    setFormData({ ...formData, stepTwo: { ...formData.stepTwo, [e.target.name]: e.target.value } });
  };

  return (
    <Card title="Customer Location" className="step-card">
      <Form>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: 'Please enter your address' }]}
        >
          <Input name="address" onChange={handleInputChange} />
        </Form.Item>

        <Form.Item
          label="City"
          name="city"
          rules={[{ required: true, message: 'Please enter your city' }]}
        >
          <Input name="city" onChange={handleInputChange} />
        </Form.Item>

        <Form.Item
          label="Postal Code"
          name="postalCode"
          rules={[{ required: true, message: 'Please enter your postal code' }]}
        >
          <Input name="postalCode" onChange={handleInputChange} />
        </Form.Item>
      </Form>
    </Card>
  );
};

export default StepTwo;
