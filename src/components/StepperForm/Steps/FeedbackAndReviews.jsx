import React from 'react';
import { Form, Input, Card } from 'antd';
import './StepOne.css';
/**
 * FeedbackAndReviews component for capturing feedback and reviews.
 * @param {object} props - Component props.
 * @returns {JSX.Element} FeedbackAndReviews component.
 */
const FeedbackAndReviews = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    setFormData({ ...formData, feedback: e.target.value });
  };

  return (
    <Card title="Feedback and Reviews" className="step-card">
      <Form>
        <Form.Item
          label="Feedback"
          name="feedback"
          rules={[{ required: true, message: 'Please provide your feedback' }]}
        >
          <Input.TextArea rows={4} name="feedback" onChange={handleInputChange} />
        </Form.Item>
      </Form>
    </Card>
  );
};

export default FeedbackAndReviews;
