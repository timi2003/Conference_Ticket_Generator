import { useState, useEffect } from 'react';
import { validateTicketForm } from '../utils/Validation';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/localStorage';

export const useTicketForm = () => {
  const [formData, setFormData] = useState(() => 
    loadFromLocalStorage('ticketForm') || {
      ticketType: 'regular',
      price: 50.00,
      quantity: 1,
      name: '',
      email: '',
      avatar: null
    }
  );

  const [errors, setErrors] = useState({});

  useEffect(() => {
    saveToLocalStorage('ticketForm', formData);
  }, [formData]);

  const validateForm = () => {
    const { isValid, errors } = validateTicketForm(formData);
    setErrors(errors);
    return isValid;
  };

  return {
    formData,
    setFormData,
    errors,
    validateForm
  };
};