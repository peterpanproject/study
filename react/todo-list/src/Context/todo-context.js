import React, { createContext } from "react";
import { useLocalStore } from "mobx-react-lite";

export const TodoProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    name: "its me",
  }));
  return <TodoContext.Provider value={store}>{children}</TodoContext.Provider>;
};

export const TodoContext = createContext();
