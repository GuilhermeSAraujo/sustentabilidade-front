import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase-config";
import { ILogin, ISignUp, User } from "../models/user";
import supabase from "../api/supabaseInitialize";

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
    const { data } = await supabase.from('user').select('id, name, email').eq('email', email);
    if (data && data.length > 0) {
      setUser(data[0]);
      localStorage.setItem('user', JSON.stringify(data[0]));
    } else {
      setUser(null);
    }
  };

  const signUp = async ({ email, password, name }: ISignUp) => {
    await createUserWithEmailAndPassword(auth, email, password);
    await supabase.from('user').insert([{ email, name }]);
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
