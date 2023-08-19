import { createContext, useState } from "react";
import { ILogin } from "../models/user";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-config";

interface AuthContextData {
  signed: boolean;
  login({ email, password }: ILogin): Promise<void>;
  logOut(): Promise<void>;
  email: string | null;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [email, setEmail] = useState<string | null>(null);


  const login = async ({ email, password }: ILogin) => {
    await signInWithEmailAndPassword(auth, email, password);
    setEmail(email);
  };

  const logOut = async () => {
    await signOut(auth);
    setEmail(null);
  };

  return (
    <AuthContext.Provider
      value={{
        signed: Boolean(email),
        email,
        login,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
