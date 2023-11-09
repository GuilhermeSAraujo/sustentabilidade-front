import { signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase-config";
import { ISignIn, ISignUp, User } from "../models/user";
import UserService from "../shared/api/userService";

interface AuthContextData {
  signed: boolean;
  login({ email, password }: ISignIn): Promise<void>;
  signUp({ email, password }: ISignUp): Promise<void>;
  logOut(): Promise<void>;
  user: User | null;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userStorage = localStorage.getItem('user');
    if (userStorage) {
      setUser(JSON.parse(userStorage));
    }
  }, []);

  const login = async (data: ISignIn) => {
    await UserService.auth(data);
    const user = { email: data.email, birthDate: '', document: '', name: '' };
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const signUp = async (data: ISignUp) => {
    await UserService.create(data);
  };

  const logOut = async () => {
    await signOut(auth);
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        signed: Boolean(user),
        user,
        login,
        logOut,
        signUp
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
