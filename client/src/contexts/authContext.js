import React, { useState, createContext } from 'react';

const Context = createContext({});

// const getDataFromImaginaryServer = (userCredentials) => {
//   const { email, password } = userCredentials;

//   const adminEmail = 'admin@admin.net';
//   const adminPassword = 'admin';

//   if (email === adminEmail && password === adminPassword) {
//     return {
//       email: adminEmail,
//       name: 'Admin',
//       photo: 'https://picsum.photos/400/400',
//     };
//   }

//   throw new Error(
//     'There is no user with that email and password, please try again.'
//   );
// };

const getDataFromImaginaryServer = (userCredentials) =>
  new Promise((resolve, reject) => {
    const { email, password } = userCredentials;

    const adminEmail = 'admin@admin.net';
    const adminPassword = 'admin';

    if (email === adminEmail && password === adminPassword) {
      return resolve({
        email: adminEmail,
        name: 'Admin',
        photo: 'https://picsum.photos/400/400',
      });
    }

    return reject({
      message:
        'There is no user with that email or password, please try again.',
    });
  });

export const AuthContext = ({ children }) => {
  const [authData, setAuthData] = useState({
    authObject: null,
    isLoading: false,
    isLogged: false,
    errorMessage: '',
  });
  const { authObject, isLoading, isLogged, errorMessage } = authData;

  const startProcessing = () => {
    setAuthData((authData) => {
      return {
        ...authData,
        isLoading: true,
      };
    });
  };

  const endProcessingWithStatusFail = (errorMessage) => {
    setAuthData((authData) => {
      return {
        ...authData,
        isLoading: false,
        isLogged: false,
        authObject: null,
        errorMessage: errorMessage,
      };
    });
  };

  const logUserInSuccess = (authObject) => {
    setAuthData((authData) => {
      return {
        ...authData,
        isLoading: false,
        isLogged: true,
        authObject: authObject,
        errorMessage: '',
      };
    });
  };

  const logUserOutSuccess = () => {
    setAuthData((authData) => {
      return {
        ...authData,
        isLoading: false,
        isLogged: false,
        authObject: null,
        errorMessage: '',
      };
    });
  };

  const logUserInWithEmailAndPassword = async (
    userCredentials,
    openInfoBar
  ) => {
    try {
      // spin loader
      startProcessing();

      // data is loaded
      const res = await getDataFromImaginaryServer(
        userCredentials,
        openInfoBar
      );

      // update state
      logUserInSuccess(res);

      // display infobar
      if (openInfoBar)
        openInfoBar({
          message: 'You successfully logged in!',
          severity: 'success',
        });
    } catch (err) {
      // or catch error
      endProcessingWithStatusFail(err.message);

      // display infobar
      if (openInfoBar) openInfoBar({ message: err.message, severity: 'error' });
    }
  };

  const logUserOut = async (openInfoBar) => {
    try {
      // spin loader
      startProcessing();

      // log user out
      logUserOutSuccess();

      // display infobar
      if (openInfoBar)
        openInfoBar({
          message: 'You successfully logged out!',
          severity: 'success',
        });
    } catch (err) {
      // or catch error
      endProcessingWithStatusFail(err.message);

      // display infobar
      if (openInfoBar) openInfoBar({ message: err.message, severity: 'error' });
    }
  };

  return (
    <Context.Provider
      value={{
        authObject,
        isLoading,
        isLogged,
        errorMessage,
        logUserInWithEmailAndPassword,
        logUserOut,
      }}
    >
      {children ? children : null}
    </Context.Provider>
  );
};

export default Context;
