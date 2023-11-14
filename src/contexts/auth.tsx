import { signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase-config";
import { ISignIn, ISignUp, UserGetResult } from "../models/user";
import UserService from "../shared/api/userService";

interface AuthContextData {
  signed: boolean;
  login({ email, password }: ISignIn): Promise<void>;
  signUp({ email, password }: ISignUp): Promise<void>;
  logOut(): Promise<void>;
  user: UserGetResult | null;
  getToken(): Promise<string>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserGetResult | null>(null);

  useEffect(() => {
    const userStorage = localStorage.getItem('user');
    if (userStorage) {
      setUser(JSON.parse(userStorage));
    }
  }, []);

  const login = async (data: ISignIn) => {
    const user = await UserService.auth(data);

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

  const getToken = async () => {
    const user = localStorage.getItem('user');
    if (user) {
      const userParsed = JSON.parse(user) as UserGetResult;
      return userParsed.token;
    }
    return '';
  }

  return (
    <AuthContext.Provider
      value={{
        signed: Boolean(user),
        user,
        login,
        logOut,
        signUp,
        getToken
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
