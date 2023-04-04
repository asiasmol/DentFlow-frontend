import React, { createContext, useCallback, useEffect, useState } from "react";
import { UserContextType } from "../models/UserContextType";
import { User } from "../models/User";
import { ACCESS_TOKEN } from "../constants/constants";
import { UserApi } from "../api/UserApi";
import jwt_decode from "jwt-decode";

const defaultSettings: UserContextType = {
  currentUser: null,
  userModifier: (user: User | null) => {},
};

export const UserContext = createContext<UserContextType>(defaultSettings);

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const userModifier = (user: User | null) => {
    setCurrentUser(user);
  };

  const fetchUser = useCallback(async () => {
    const user = await UserApi.getUser();
    userModifier({
      email: user.data.email,
    });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token && !currentUser) {
      const decodedToken = jwt_decode(token) as any;
      const tokenExp = decodedToken.exp as number;
      const currentTimestamp = Math.round(Date.now() / 1000);

      if (tokenExp > currentTimestamp) {
        fetchUser();
      }
    }
  }, [fetchUser, currentUser]);

  return (
    <UserContext.Provider value={{ currentUser, userModifier }}>
      {children}
    </UserContext.Provider>
  );
};


