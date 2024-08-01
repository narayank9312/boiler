import queryClient from '@/config/queryClient';
import tokenStore from '@/config/tokenStore';

import type { AuthInfo, GetProfileOutput } from '@/features/auth/auth.type';
import type { SliceCreator } from '@/types/store';

interface AuthSlice extends AuthInfo {
  login: (token: string) => void;
  setUser: (payload: GetProfileOutput) => void;
  logout: () => void;
}

const initialState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

export const setUser = (payload: GetProfileOutput): Partial<AuthInfo> => {
  queryClient.setQueryData(['user'], payload);

  return {
    isAuthenticated: true,
    token: tokenStore.get() ?? '',
    user: payload,
  };
};

const createAuthSlice: SliceCreator<AuthSlice> = set => ({
  ...initialState,
  login: token => {
    set({ token }, false, 'auth/login');
    tokenStore.set(token);
  },
  setUser: payload => {
    set(setUser(payload), false, 'auth/setUser');
  },
  logout: () => {
    set(initialState, false, 'auth/logout');
    tokenStore.delete();
    queryClient.removeQueries();
  },
});

export default createAuthSlice;
