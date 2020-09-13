import React, { useState, createContext } from 'react';

const Context = createContext({});

const initializeListItems = (n) =>
  Array.from(new Array(n), (el, i) => ({
    id: i + 1,
    content: `Text Content for - ${i + 1}`,
    // checked: Math.random() > 0.5 ? true : false,
    checked: false,
  }));

export const ListContext = ({ children }) => {
  const [listState, setListState] = useState({
    listItems: initializeListItems(50),
    allChecked: false,
  });

  const { listItems, allChecked } = listState;

  const singleCheckToggler = (initialList, id) => {
    return initialList.map((obj) => {
      if (obj.id === id) {
        obj.checked = !obj.checked;
        return obj;
      }
      return obj;
    });
  };

  const allCheckToggler = ({ listItems, allChecked }) => {
    return listItems.map((obj) => {
      obj.checked = allChecked ? false : true;
      return obj;
    });
  };

  const toggleSingleListCheck = (listItemId) => {
    setListState((listState) => {
      return {
        ...listState,
        listItems: singleCheckToggler(listState.listItems, listItemId),
      };
    });
  };

  const toggleAllListCheck = () => {
    setListState((listState) => {
      return {
        ...listState,
        allChecked: !listState.allChecked,
        listItems: allCheckToggler(listState),
      };
    });
  };

  return (
    <Context.Provider
      value={{
        listItems,
        allChecked,
        toggleSingleListCheck,
        toggleAllListCheck,
      }}
    >
      {children ? children : null}
    </Context.Provider>
  );
};

export default Context;
