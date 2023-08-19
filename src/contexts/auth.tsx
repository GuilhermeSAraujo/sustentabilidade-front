import { signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useContext } from 'react';
import { ILogin } from '../models/user';

interface AuthContextData {
  signed: boolean;
  login({auth, email, password} : ILogin ): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
 
export const AuthProvider = ({ children } : { children: React.ReactNode }) => {

  const login = async ({auth, email, password} : ILogin ) => {
    await signInWithEmailAndPassword(auth, email, password)
  };

 return (
   <AuthContext.Provider value={{ signed: false, login }} >
     {children}
   </AuthContext.Provider>
 );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
}