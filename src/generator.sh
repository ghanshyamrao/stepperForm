#!/bin/bash

mkdir -p components/StepperLoginFlow
mv StepperForm.jsx components/StepperLoginFlow
mv StepperForm.css components/StepperLoginFlow

mkdir -p components/StepperLoginFlow/Login
mv Login.jsx components/StepperLoginFlow/Login
mv Login.css components/StepperLoginFlow/Login

mkdir -p components/StepperLoginFlow/Register
mv Register.jsx components/StepperLoginFlow/Register
mv Register.css components/StepperLoginFlow/Register

touch components/StepperLoginFlow/StepperForm.css
touch components/StepperLoginFlow/Login/Login.css
touch components/StepperLoginFlow/Register/Register.css
