import React, { createContext, useContext, useState, useMemo, useEffect } from "react";
import type { IUserTable as UserT } from "types";

type UsersContextT = {
  users: UserT[];
  setUsers: React.Dispatch<React.SetStateAction<UserT[]>>;
  currentNewUser: UserT;
};

const UsersContext = createContext<UsersContextT>({} as UsersContextT);

export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<UserT[]>(() =>
    JSON.parse(localStorage.getItem("users") ?? "[]")
  );
  const currentNewUser = users[users.length - 1];
  const value = useMemo(() => ({ users, setUsers, currentNewUser }), [users]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>;
};

export const useUsers = () => useContext(UsersContext);
