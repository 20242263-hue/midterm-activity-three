// components/StudentForm.tsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface FormData {
  name: string;
  email: string;
  age: number;
}

// Validation schema using yup
const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  age: yup.number().positive('Age must be positive').required('Age is required'),
}).required();

interface StudentFormProps {
  onSubmit: (data: FormData) => void;
}

const StudentForm: React.FC<StudentFormProps> = ({ onSubmit }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <input {...field} />}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <label>Email:</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input {...field} />}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label>Age:</label>
        <Controller
          name="age"
          control={control}
          render={({ field }) => <input type="number" {...field} />}
        />
        {errors.age && <span>{errors.age.message}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;