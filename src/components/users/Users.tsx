import React from 'react';

import Image from 'next/image';

import { UsersContainer } from '@/components/users/Users.styled';
import { useUsers } from '@/features/user/user.hook';
import Loader from '@/shared/loader/Loader';
import { isProcessing } from '@/utils/utils';

import type { Component } from '@/types';

const Users: Component = () => {
  const { isLoading, data: users } = useUsers();

  if (isProcessing(users, isLoading)) return <Loader />;

  return (
    <UsersContainer>
      <table>
        <thead>
          <tr>
            <th aria-label="image" />
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.slice(0, 10).map(user => (
            <tr key={user.id}>
              <td className="img">
                <Image src={user.avatar} alt={user.name} width="100" height="100" />
              </td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </UsersContainer>
  );
};

export default Users;
