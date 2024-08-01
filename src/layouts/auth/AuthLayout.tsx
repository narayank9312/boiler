import React from 'react';

import authRightImage from '@/assets/auth-right.png';
import Header from '@/components/header/Header';
import { AuthLayoutContainer } from '@/layouts/auth/AuthLayout.styled';

import type { Layout } from '@/types';

const AuthLayout: Layout = ({ children }) => (
  <AuthLayoutContainer>
    <div>
      <Header />
      <section className="auth-section">
        <div className="auth-content">{children}</div>
        <div className="auth-right">
          <img src={authRightImage.src} alt="auth-right" />
        </div>
      </section>
    </div>
  </AuthLayoutContainer>
);

export default AuthLayout;
