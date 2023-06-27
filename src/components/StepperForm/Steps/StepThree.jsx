import React from 'react';
import { Form, Input, Card } from 'antd';
import './StepOne.css';
/**
 * StepThree component for the third step of the stepper form.
 * @param {object} props - Component props.
 * @returns {JSX.Element} StepThree component.
 */
const StepThree = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    setFormData({ ...formData, stepThree: { ...formData.stepThree, [e.target.name]: e.target.value } });
  };

  return (
    <Card title="Card Details" className="step-card">
      <Form>
        <Form.Item
          label="Card Number"
          name="cardNumber"
          rules={[{ required: true, message: 'Please enter your card number' }]}
        >
          <Input name="cardNumber" onChange={handleInputChange} />
        </Form.Item>

        <Form.Item
          label="Expiration Date"
          name="expirationDate"
          rules={[{ required: true, message: 'Please enter the expiration date' }]}
        >
          <Input name="expirationDate" onChange={handleInputChange} />
        </Form.Item>

        <Form.Item
          label="CVV"
          name="cvv"
          rules={[{ required: true, message: 'Please enter the CVV' }]}
        >
          <Input name="cvv" onChange={handleInputChange} />
        </Form.Item>
      </Form>
    </Card>
  );
};

export default StepThree;
