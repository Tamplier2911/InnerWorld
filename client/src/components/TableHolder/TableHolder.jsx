import React, { useContext } from 'react';

// redux
// import { useSelector } from 'react-redux';

// context
import TableContext from '../../contexts/tableContext.js';

// mui
import { Paper } from '@material-ui/core';

// components
import VirtualizedTable from '../VirtualizedTable/VirtualizedTable.jsx';

const TableHolder = () => {
  // const data = useSelector((state) => state.table.tableData);
  const { tableData } = useContext(TableContext);

  const tableHeaders = [
    {
      width: 146,
      label: 'ID',
      dataKey: 'id',
      numeric: true,
    },
    {
      width: 680,
      label: 'Content',
      dataKey: 'content',
      numeric: false,
    },
    {
      width: 146,
      label: 'checked',
      dataKey: 'checked',
      numeric: false,
    },
  ];
  return (
    <Paper style={{ height: '100%', width: '100%' }}>
      <VirtualizedTable
        // rowCount={data.length}
        rowCount={tableData.length}
        // rowGetter={({ index }) => data[index]}
        rowGetter={({ index }) => tableData[index]}
        columns={tableHeaders}
      />
    </Paper>
  );
};

export default TableHolder;
