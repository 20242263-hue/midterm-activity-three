// components/StudentList.tsx
import React from 'react';

interface Student {
  name: string;
  email: string;
  age: number;
}

interface StudentListProps {
  students: Student[];
}

const StudentList: React.FC<StudentListProps> = ({ students }) => {
  return (
    <div>
      <h2>Registered Students</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} ({student.email}), Age: {student.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;