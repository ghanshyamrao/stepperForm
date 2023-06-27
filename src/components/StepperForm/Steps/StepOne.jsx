import React from 'react';
import { Card, Form, Input } from 'antd';
import './StepOne.css'; // Import custom CSS file for styling

/**
 * StepOne component for the first step of the stepper form.
 * @param {object} props - Component props.
 * @returns {JSX.Element} StepOne component.
 */
const StepOne = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    setFormData({ ...formData, stepOne: { ...formData.stepOne, [e.target.name]: e.target.value } });
  };

  return (
    <Card title={'User Details'} className="step-card"  bordered={false} hoverable>
      <Form layout="vertical">
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: 'Please enter your first name' }]}
        >
          <Input name="firstName" onChange={handleInputChange} />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: 'Please enter your last name' }]}
        >
          <Input name="lastName" onChange={handleInputChange} />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please enter your username' }]}
        >
          <Input name="username" onChange={handleInputChange} />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Invalid email' },
          ]}
        >
          <Input name="email" onChange={handleInputChange} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input.Password name="password" onChange={handleInputChange} />
        </Form.Item>
      </Form>
    </Card>
  );
};

export default StepOne;
