'use client';

import React from 'react';

import { redirect } from 'next/navigation';

import AuthLayout from '@/layouts/auth/AuthLayout';
import { useStore } from '@/store';

import type { Layout } from '@/types';

const AuthNextLayout: Layout = ({ children }) => {
  const isAuthenticated = useStore(state => state.isAuthenticated);

  if (isAuthenticated) return redirect('/app');

  return <AuthLayout>{children}</AuthLayout>;
};

export default AuthNextLayout;
