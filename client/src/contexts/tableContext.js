import React, { useState, createContext } from 'react';

const Context = createContext({});

const initializeTableData = (n) => {
  return Array.from(new Array(n), (el, i) => ({
    id: i + 1,
    content: `Text content for ${i + 1}`,
    checked: false,
  }));
};

export const TableContext = ({ children }) => {
  const [tableState, setTableState] = useState({
    tableData: initializeTableData(20000),
    allChecked: false,
  });

  const { tableData, allChecked } = tableState;

  const singleCheckToggler = (initialData, id) => {
    return initialData.map((obj) => {
      if (obj.id === id) {
        obj.checked = !obj.checked;
        return obj;
      }
      return obj;
    });
  };

  const allCheckToggler = ({ tableData, allChecked }) => {
    return tableData.map((obj) => {
      obj.checked = allChecked ? false : true;
      return obj;
    });
  };

  const toggleSingleTableCheck = (tableItemId) => {
    setTableState((tableState) => {
      return {
        ...tableState,
        tableData: singleCheckToggler(tableState.tableData, tableItemId),
      };
    });
  };

  const toggleAllTableCheck = () => {
    setTableState((tableState) => {
      return {
        ...tableState,
        allChecked: !tableState.allChecked,
        tableData: allCheckToggler(tableState),
      };
    });
  };

  return (
    <Context.Provider
      value={{
        tableData,
        allChecked,
        toggleSingleTableCheck,
        toggleAllTableCheck,
      }}
    >
      {children ? children : null}
    </Context.Provider>
  );
};

export default Context;
