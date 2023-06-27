import React, { useState } from 'react';
import Login from './Login/Login';
import './StepperForm.css'
import Register from './Register/Register';

const AuthenticationForm = () => {
  const [isRegister, setIsRegister] = useState(false);

  const handleSwitchForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div>
      {isRegister ? (
        <Register onSwitchForm={handleSwitchForm} />
      ) : (
        <Login onSwitchForm={handleSwitchForm} />
      )}
    </div>
  );
};

export default AuthenticationForm;
