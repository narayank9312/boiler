/* Login API */

export interface LoginInput {
  email: string;
  password: string;
}

export interface LoginOutput {
  access_token: string;
}

/* Authorization */

export interface AuthInfo {
  isAuthenticated: boolean;
  token?: string | null;
  user?: GetProfileOutput | null;
}

interface UseFetchUserOutput {
  isLoading: boolean;
  fetchUser: () => Promise<boolean>;
}

export type UseFetchUser = () => UseFetchUserOutput;

/* Get Profile API */

export type GetProfileInput = unknown;

export interface GetProfileOutput {
  id: number;
  email: string;
  name: string;
  avatar: string;
}
