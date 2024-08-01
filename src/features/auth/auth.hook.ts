import { useState } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { getProfileApi, loginApi } from '@/features/auth/auth.api';
import { useStore } from '@/store';

import type { UseFetchUser } from '@/features/auth/auth.type';

export const useLogin = () => {
  const login = useStore(state => state.login);

  return useMutation({
    mutationFn: loginApi,
    onSuccess: async data => {
      if (!data) return;

      login(data.access_token);
    },
  });
};

export const useFetchUser: UseFetchUser = () => {
  const queryClient = useQueryClient();
  const setUser = useStore(state => state.setUser);
  const [isLoading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);

    const data = await queryClient.fetchQuery({
      queryKey: ['user'],
      queryFn: async ({ signal }) => getProfileApi({ signal }),
    });

    setLoading(false);

    if (!data) return false;

    setUser(data);
    return true;
  };

  return { isLoading, fetchUser };
};
