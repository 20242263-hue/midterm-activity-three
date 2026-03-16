// pages/Register.tsx
import React from 'react';
import StudentForm from '../components/StudentForm';

const Register: React.FC = () => {
  const handleSubmit = (data: any) => {
    console.log('Form data:', data);
  };

  return (
    <div>
      <h1>Student Registration</h1>
      <StudentForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Register;