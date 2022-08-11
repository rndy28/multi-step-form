import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { IUserTable as UserT } from "types";
import { useUsers } from "./UsersContext";

type NewUserContextT = {
  setNewUser: React.Dispatch<React.SetStateAction<UserT>>;
  newUser: UserT;
};

const NewUserContext = createContext<NewUserContextT>({} as NewUserContextT);

export const NewUserProvider = ({ children }: { children: React.ReactNode }) => {
  const [newUser, setNewUser] = useState<UserT>({} as UserT);
  const value = useMemo(() => ({ setNewUser, newUser }), [newUser]);
  const navigate = useNavigate();
  const { setUsers } = useUsers();

  useEffect(() => {
    if ("skills" in newUser) {
      setUsers((prev) => [...prev, newUser]);
      navigate("/");
    }
  }, [newUser]);

  return <NewUserContext.Provider value={value}>{children}</NewUserContext.Provider>;
};

export const useNewUser = () => useContext(NewUserContext);
