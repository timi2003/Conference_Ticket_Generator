import React from 'react';

export const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-[#001a23] border border-[#00384d] rounded-lg ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className = '' }) => {
  return (
    <h3 className={`text-xl font-bold text-cyan-400 ${className}`}>
      {children}
    </h3>
  );
};

export const CardContent = ({ children, className = '' }) => {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  );
};

// Export all components
export default {
  Card,
  CardHeader,
  CardTitle,
  CardContent
};