// authTypes.ts
export interface AuthContextState {
  isAuthenticated: boolean;
  user: any; // Replace 'any' with your User type
  login: (username: string, password: string) => void;
  logout: () => void;
  register: (username: string, password: string) => void;
}
