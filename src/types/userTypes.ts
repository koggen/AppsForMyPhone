export interface User {
  id: string;
  displayName: string | null;
  email: string;
}

export interface AuthState {
  loading: boolean;
  currentUser: User | null;
  error: string | null;
}

export interface RegisterData {
  displayName: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}