'use client'
import { createContext, useContext, useEffect, useState } from 'react';

// Create the context
const FormContext = createContext();

// Custom hook to use the form context
export const useFormContext = () => useContext(FormContext);

const defaultFormData = {
  carName: 'Toyota',
  carModel: 'Camry',
  fuel: "Regular gasoline (87)",
  gearbox: "Manual",
  yearOfRegistation: "2024",
  mileage: "0-25,000 mi",
  countryOfRegistation: "United States",
  state: "Alaska",
  numberOfDoors: '2',
  numberOfSeats: '4',
  otherFeatures: []
};

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(defaultFormData);

  useEffect(() => {
    // Only access localStorage on the client side
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    // Sync formData with localStorage whenever it changes
    if (typeof window !== 'undefined') {
      localStorage.setItem('formData', JSON.stringify(formData));
    }
  }, [formData]);

  const updateFormData = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const resetFormData = () => {
    setFormData(defaultFormData); // Reset state to default values
    localStorage.removeItem('formData'); // Clear from localStorage
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, resetFormData }}>
      {children}
    </FormContext.Provider>
  );
};
