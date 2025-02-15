export const validateTicketForm = (data) => {
    const errors = {};
  
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }
  
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'Invalid email format';
    }
  
    if (data.quantity < 1) {
      errors.quantity = 'Quantity must be at least 1';
    }
  
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  };