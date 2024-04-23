import { createContext, useState } from "react";
import { UserJWT } from "../Models/UserJwt";
import { useNavigate } from "react-router";

type UserContextType = {
  user: UserJWT | null;
  loginUser: (username: string, password: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<UserJWT | null>(null);
};
