import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase-config";
import { ILogin, ISignUp, User } from "../models/user";

interface AuthContextData {
  signed: boolean;
  login({ email, password }: ILogin): Promise<void>;
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

  const login = async ({ email, password }: ILogin) => {
    await signInWithEmailAndPassword(auth, email, password);
    setUser({ email });
    localStorage.setItem('user', JSON.stringify({ email }));
  };

  const signUp = async ({ email, password }: ISignUp) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    await signOut(auth);
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
