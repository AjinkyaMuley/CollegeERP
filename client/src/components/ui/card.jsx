// src/components/ui/Card.jsx
import React from 'react';

const Card = ({ children, className = '', ...props }) => {
  return (
    <div className={`shadow-lg rounded-lg overflow-hidden bg-white ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
