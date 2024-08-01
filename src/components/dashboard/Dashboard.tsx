import React from 'react';

import Image from 'next/image';

import { DashboardContainer } from '@/components/dashboard/Dashboard.styled';
import { useStore } from '@/store';

import type { Component } from '@/types';

const Dashboard: Component = () => {
  const user = useStore(state => state.user);

  if (!user) return null;

  return (
    <DashboardContainer>
      <Image src={user.avatar} alt={user.name} width="100" height="100" />
      <p>ID: {user.id}</p>
      <p>Full Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </DashboardContainer>
  );
};

export default Dashboard;
