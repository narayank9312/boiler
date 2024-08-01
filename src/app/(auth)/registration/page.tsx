'use client';

import React from 'react';

import type { Component } from '@/types';
import FirstPageForm from './form/FirstPageForm';
import { Button } from '@mui/material';
const RegisterPage: Component = () => (
  <div>
    <FirstPageForm />
    <Button variant="contained" color="primary" type="submit" sx={{ padding: '12px 24px' }}>
      Continue
    </Button>
  </div>
);

export default RegisterPage;
