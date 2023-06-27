import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StepperForm from './components/StepperForm/StepperForm';
import './App.css'; // Import custom CSS file
import Login from './components/StepperLoginFlow/Login/Login';
import Register from './components/StepperLoginFlow/Register/Register';
import ForgotPassword from './components/StepperLoginFlow/Forget/Forget';
import Contact from './components/StepperLoginFlow/Contact/Contact';
import CreditCard from './components/StepperLoginFlow/CreditCard/creditCard';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<StepperForm />} />
          <Route path="/loginFlow/login" element={<Login/>} />
          <Route path="/loginFlow/register" element={<Register />} />
          <Route path="/loginFlow/forgetPassword" element={<ForgotPassword />} />
          <Route path="/loginFlow/contact" element={<Contact />} />
          <Route path="/loginFlow/creditCard" element={<CreditCard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
