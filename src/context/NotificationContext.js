import { createContext, useState } from "react";

export const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [allert, setAllert] = useState("");
  const [alertType, setAlertType] = useState("");

  const notification = (type, message) => {
    setAlertType(type);
    setAllert(message);
  };

  return (
    <NotificationContext.Provider
      value={{
        allert,
        setAllert,
        alertType,
        notification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
