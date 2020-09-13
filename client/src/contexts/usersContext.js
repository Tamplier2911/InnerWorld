import React, { useState, createContext } from 'react';

const Context = createContext({});

export const UsersContext = ({ children, db }) => {
  const [usersState, setUsersState] = useState({
    usersList: [],
    isLoading: false,
    errorMessage: '',
  });
  const { usersList, isLoading, errorMessage } = usersState;

  const startProcessing = () => {
    setUsersState((usersState) => {
      return {
        ...usersState,
        isLoading: true,
      };
    });
  };

  const endProcessingWithStatusFail = (errorMessage) => {
    setUsersState((usersState) => {
      return {
        ...usersState,
        isLoading: false,
        errorMessage: errorMessage,
      };
    });
  };

  const fetchUsersSuccess = (users) => {
    setUsersState((usersState) => {
      return {
        ...usersState,
        isLoading: false,
        errorMessage: '',
        usersList: users,
      };
    });
  };

  const createUserSuccess = (userObject) => {
    setUsersState((usersState) => {
      return {
        ...usersState,
        isLoading: false,
        errorMessage: '',
        usersList: [userObject, ...usersState.usersList],
      };
    });
  };

  const updateRespectiveUserData = (usersList, updatedUserObject) => {
    return usersList.map((userObj) => {
      if (userObj.id === updatedUserObject.id) return updatedUserObject;
      return userObj;
    });
  };

  const editUserSuccess = (userObject) => {
    setUsersState((usersState) => {
      return {
        ...usersState,
        isLoading: false,
        errorMessage: '',
        usersList: updateRespectiveUserData(usersState.usersList, userObject),
      };
    });
  };

  const filterRemoveUser = (usersList, userId) => {
    return usersList.filter((obj) => obj.id !== userId);
  };

  const removeUserSuccess = (userId) => {
    setUsersState((usersState) => {
      return {
        ...usersState,
        isLoading: false,
        errorMessage: '',
        usersList: filterRemoveUser(usersState.usersList, userId),
      };
    });
  };

  const convertUsersData = (users) => {
    return users.map((userObj) => {
      userObj.phone = userObj.phone.split(' ');
      userObj.email = userObj.email.split(' ');
      return userObj;
    });
  };

  const fetchAllUsers = async (openInfoBar) => {
    try {
      // spin loader
      startProcessing();

      // fetch users
      const res = await db.readData('users');

      // convert users to comfort view interface
      const convertedUsers = convertUsersData(res);

      // update state with users
      fetchUsersSuccess(convertedUsers);

      // display infobar
      openInfoBar({
        message: 'Users successfuly fetched from WebSQL!',
        severity: 'success',
      });
    } catch (err) {
      // or catch error
      endProcessingWithStatusFail(err.message);

      // display infobar
      openInfoBar({
        message: err.message,
        severity: 'error',
      });
    }
  };

  const createNewUser = async (userObject, openInfoBar) => {
    try {
      const { firstName, lastName, phone, email } = userObject;
      const phoneString = phone.join(' ');
      const emailString = email.join(' ');

      // spin loader
      startProcessing();

      // create user in db
      const res = await db.insertData(
        'users',
        `(firstName, lastName, phone, email)
            VALUES ('${firstName}', '${lastName}', '${phoneString}', '${emailString}')`,
        emailString
      );

      // convert users to comfort view interface
      const convertedUsers = convertUsersData(res);

      // update state
      createUserSuccess(convertedUsers[0]);

      // display infobar
      openInfoBar({
        message: 'User was successfully created in DB!',
        severity: 'success',
      });
    } catch (err) {
      // or catch error
      endProcessingWithStatusFail(err.message);

      // display infobar
      openInfoBar({
        message: err.message,
        severity: 'error',
      });
    }
  };

  const updateUserData = async (userObject, openInfoBar) => {
    try {
      const { id, firstName, lastName, phone, email } = userObject;
      const phoneString = phone.join(' ');
      const emailString = email.join(' ');

      // spin loader
      startProcessing();

      // update users data in db
      const res = await db.updateData(
        'users',
        `firstName='${firstName}', lastName='${lastName}', phone='${phoneString}', email='${emailString}'`,
        id
      );

      // update state
      editUserSuccess(userObject);

      // display infobar
      openInfoBar({
        message: `User ${firstName} was successfully updated!`,
        severity: 'success',
      });
    } catch (err) {
      // or catch error
      endProcessingWithStatusFail(err.message);

      // display infobar
      openInfoBar({
        message: err.message,
        severity: 'error',
      });
    }
  };

  const removeUser = async (userObject, openInfoBar) => {
    try {
      const { id } = userObject;

      // spin loader
      startProcessing();

      // remove user from db
      const res = await db.deleteData('users', id);

      // update state
      removeUserSuccess(id);

      // display infobar
      openInfoBar({
        message: res,
        severity: 'success',
      });
    } catch (err) {
      // or catch error
      endProcessingWithStatusFail(err.message);

      // display infobar
      openInfoBar({
        message: err.message,
        severity: 'error',
      });
    }
  };

  const createUsersTable = async (openInfoBar) => {
    try {
      const res = await db.createTable(
        'users',
        `(
            id INTEGER PRIMARY KEY,
            firstName VARCHAR(40) NOT NULL,
            lastName VARCHAR(40) NOT NULL,
            phone TEXT NOT NULL,
            email TEXT NOT NULL
          )`
      );
      openInfoBar({
        message: res,
        severity: 'success',
      });
    } catch (err) {
      openInfoBar({
        message: err.message,
        severity: 'error',
      });
    }
  };

  return (
    <Context.Provider
      value={{
        usersList,
        isLoading,
        errorMessage,
        createUsersTable,
        fetchAllUsers,
        createNewUser,
        updateUserData,
        removeUser,
      }}
    >
      {children ? children : null}
    </Context.Provider>
  );
};

export default Context;
