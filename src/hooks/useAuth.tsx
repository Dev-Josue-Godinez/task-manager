import React, { createContext, useEffect, useState } from "react";
import { UserJWT } from "../Models/UserJwt";
import { useNavigate } from "react-router";
import { loginApi } from "../services/AuthService";
import { toast } from "react-toastify";
import axios from "axios";

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
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const userl = localStorage.getItem("user");
    if (userl) {
      setUser(JSON.parse(userl));
      axios.defaults.headers.common["Authorization"] = "Bearer " + user?.token; //bad practice
    }
    setIsReady(true);
  }, []);

  const loginUser = async (username: string, password: string) => {
    await loginApi(username, password)
      .then((res) => {
        if (res) {
          const userObj = {
            username: res?.data.username,
            email: res?.data.email,
            token: res?.data.token,
          };
          localStorage.setItem("user", JSON.stringify(userObj));
          setUser(userObj!);
          toast.success("Login success");
          navigate("/home");
        }
      })
      .catch((err) => toast.warning("Server error occurred: " + err?.message));
  };

  const isLoggedIn = () => {
    return !!user;
  };

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ loginUser, user, logout, isLoggedIn }}>
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);
