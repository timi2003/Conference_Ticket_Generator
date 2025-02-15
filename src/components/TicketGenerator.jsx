import React, { useState, useEffect } from 'react';
import { AlertCircle, Upload } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const ConferenceTicketGenerator = () => {
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    avatarUrl: ''
  });

  // Validation state
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Load saved data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('conferenceTicketForm');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('conferenceTicketForm', JSON.stringify(formData));
  }, [formData]);

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.avatarUrl.trim()) {
      newErrors.avatarUrl = 'Avatar URL is required';
    } else if (!formData.avatarUrl.startsWith('http')) {
      newErrors.avatarUrl = 'Please enter a valid image URL';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Form Section */}
        <Card>
          <CardHeader>
            <CardTitle>Conference Registration</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name Field */}
              <div>
                <label 
                  htmlFor="fullName"
                  className="block text-sm font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                />
                {errors.fullName && (
                  <Alert variant="destructive" className="mt-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription id="fullName-error">
                      {errors.fullName}
                    </AlertDescription>
                  </Alert>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label 
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <Alert variant="destructive" className="mt-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription id="email-error">
                      {errors.email}
                    </AlertDescription>
                  </Alert>
                )}
              </div>

              {/* Avatar URL Field */}
              <div>
                <label 
                  htmlFor="avatarUrl"
                  className="block text-sm font-medium mb-2"
                >
                  Avatar URL
                </label>
                <input
                  type="url"
                  id="avatarUrl"
                  name="avatarUrl"
                  value={formData.avatarUrl}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  aria-invalid={!!errors.avatarUrl}
                  aria-describedby={errors.avatarUrl ? "avatarUrl-error" : undefined}
                />
                {errors.avatarUrl && (
                  <Alert variant="destructive" className="mt-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription id="avatarUrl-error">
                      {errors.avatarUrl}
                    </AlertDescription>
                  </Alert>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Generate Ticket
              </button>
            </form>
          </CardContent>
        </Card>

        {/* Generated Ticket */}
        {isSubmitted && (
          <Card>
            <CardHeader>
              <CardTitle>Your Conference Ticket</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src={formData.avatarUrl}
                  alt={`${formData.fullName}'s avatar`}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">{formData.fullName}</h3>
                  <p className="text-gray-600">{formData.email}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ConferenceTicketGenerator;