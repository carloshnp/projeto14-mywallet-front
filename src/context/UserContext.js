import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : undefined
  );

  const [bearer, setBearer] = useState(
    localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : undefined
  );

  return (
    <UserContext.Provider value={{ user, setUser, bearer, setBearer }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUserContext foi utilizado fora do Provider");
  }
  return context;
};

export { UserContext, UserContextProvider, useUserContext };
