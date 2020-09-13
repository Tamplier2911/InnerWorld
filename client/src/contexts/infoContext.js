import React, { useState, createContext } from 'react';

const Context = createContext({});

export const InfoContext = ({ children }) => {
  const [infoBar, setInfoBar] = useState({
    isOpen: false,
    message: '',
    severity: '',
  });

  const { isOpen, message, severity } = infoBar;

  const openInfoBar = (dataObject) => {
    setInfoBar((infoBar) => {
      return {
        ...infoBar,
        isOpen: true,
        message: dataObject.message,
        severity: dataObject.severity,
      };
    });
  };

  const closeInfoBar = () => {
    setInfoBar((infoBar) => {
      return {
        ...infoBar,
        isOpen: false,
        message: '',
        severity: infoBar.severity,
      };
    });
  };

  return (
    <Context.Provider
      value={{
        isOpen,
        message,
        severity,
        openInfoBar,
        closeInfoBar,
      }}
    >
      {children ? children : null}
    </Context.Provider>
  );
};

export default Context;
