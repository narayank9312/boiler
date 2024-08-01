'use client';
import React, { useState } from 'react';
import { Typography, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { formData } from './formData';

const FirstPageForm = () => {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', formValues);
  };
  const renderFormField = (field: any, formValues: any, handleInputChange: any) => {
    switch (field.type) {
      case 'dropdown':
        return (
          <FormControl fullWidth key={field.name}>
            <InputLabel>{field.label}</InputLabel>
            <Select
              name={field.name}
              value={formValues[field.name] || ''}
              onChange={handleInputChange}
            >
              {field.options.map((option: any, index: number) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );

      case 'text':
      case 'number':
        return (
          <TextField
            fullWidth
            label={field.label}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder || ''}
            required={field.required}
            onChange={handleInputChange}
            value={formValues[field.name] || ''}
            key={field.name}
          />
        );

      default:
        return null;
    }
  };
  return (
    <div>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        Join the Reliance success story!
      </Typography>
      <Typography variant="subtitle1" sx={{ color: 'grey' }}>
        Enter your details to register and sell with Reliance.
      </Typography>
      <form onSubmit={handleSubmit}>
        {formData.leadForm.map((field: any) =>
          renderFormField(field, formValues, handleInputChange)
        )}
      </form>
    </div>
  );
};

export default FirstPageForm;
