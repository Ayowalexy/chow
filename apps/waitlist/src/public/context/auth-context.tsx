import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  useMemo,
} from 'react';

type props = {
  validated: boolean;
  setValidated: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
};

type authProps = {
  children: ReactNode;
};

const AuthContext = createContext<props>({
  validated: false,
  setValidated: () => null,
  isOpen: false,
  setIsOpen: () => null,
  name: '',
  setName: () => null,
  email: '',
  setEmail: () => null,
});

export const AuthContextProvider = ({ children }: authProps) => {
  const [validated, setValidated] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const value = useMemo(
    () => ({
      validated,
      setValidated,
      isOpen,
      setIsOpen,
      name,
      setName,
      email,
      setEmail,
    }),
    [validated, setValidated, isOpen, setIsOpen, name, setName, email, setEmail]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
