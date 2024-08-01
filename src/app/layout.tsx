import React from 'react';

import Providers from '@/app/providers';
import { getProfileApi } from '@/features/auth/auth.api';
import '@/styles/external.css';
import { jioType } from '@/styles/font';

import type { Layout } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seller Central Platform',
  description: 'Seller Central Platform',
};

const RootNextLayout: Layout = async ({ children }) => {
  const user = await getProfileApi({}, { throwError: false });

  return (
    <html lang="en" className={jioType.className}>
      <body>
        <Providers initialState={{ user }}>{children}</Providers>
      </body>
    </html>
  );
};

export default RootNextLayout;
