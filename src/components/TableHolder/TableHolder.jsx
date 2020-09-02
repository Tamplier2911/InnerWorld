import './TableHolder.scss';
import React from 'react';

// redux
import { useSelector } from 'react-redux';

// mui
import { Paper } from '@material-ui/core';

// components
import VirtualizedTable from '../VirtualizedTable/VirtualizedTable.jsx';

const TableHolder = () => {
  const data = useSelector((state) => state.table.tableData);
  return (
    <Paper style={{ height: '100%', width: '100%' }}>
      <VirtualizedTable
        rowCount={data.length}
        rowGetter={({ index }) => data[index]}
        columns={[
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
        ]}
      />
    </Paper>
  );
};

export default TableHolder;
