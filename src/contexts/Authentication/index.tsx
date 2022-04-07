import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useStorage from '../../utils/localStorage/useStorage';

interface IProps {
  user: string;
  password: string;
}

interface IAuthContextData {
  logged: boolean;
  token: string;
  userData: UserData;
  setToken: (token: string) => void;
  removeToken: () => void;
  removeUserDagaStorage: () => void;
  login: ({ user, password }: IProps) => void;
  error: string | null;
  loading: boolean;
}

export type UserData = {
  email: string;
  foto: string;
  login: string;
  matricula: string;
  nome: string;
  token: string;
  message: [string];
};

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken, removeToken] = useStorage('token');
  const [userData, setUserDataStorage, removeUserDagaStorage] =
    useStorage('userData');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const login = ({ user, password }: IProps) => {
    setLoading(true);

    // const response = auth.login({ user, password });
    // response
    //   .then((res) => {
    //     const data: UserData = { ...res.data.data };
    //     setToken(data.token);
    //     setUserDataStorage(data);
    //     navigate('/painel');
    //     setError('');
    //     setLoading(false);
    //   })
    //   .catch(() => {
    //     setLoading(false);
    //     setError('Usuário e/ou senha incorreto(s)');
    //   });
  };

  return (
    <AuthContext.Provider
      value={{
        logged: !!token,
        token,
        setToken,
        removeToken,
        login,
        error,
        loading,
        userData,
        removeUserDagaStorage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
