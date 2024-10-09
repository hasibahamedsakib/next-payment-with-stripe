'use client';
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
  otherFeatures: [],
};

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(defaultFormData); // Start with default values
  const [isMounted, setIsMounted] = useState(false); // Track if the component has mounted

  useEffect(() => {
    // This effect runs only on the client side after the first render
    setIsMounted(true);
    const savedData = localStorage.getItem('formData'); // Get data from localStorage
    if (savedData) {
      setFormData(JSON.parse(savedData)); // Update state with saved data if it exists
    }
  }, []); // Run only once on mount

  useEffect(() => {
    // Sync formData with localStorage whenever it changes, but only if the component has mounted
    if (isMounted) {
      localStorage.setItem('formData', JSON.stringify(formData)); // Store updated data in localStorage
    }
  }, [formData, isMounted]); // Depend on formData and isMounted

  const updateFormData = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const resetFormData = () => {
    setFormData(defaultFormData); // Reset to default values
    localStorage.removeItem('formData'); // Clear localStorage
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, resetFormData }}>
      {children}
    </FormContext.Provider>
  );
};
