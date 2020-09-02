import React from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleAllTableCheck,
  toggleSingleTableCheck,
} from '../../redux/table/table.actions';
import {
  toggleSingleListCheck,
  toggleAllListCheck,
} from '../../redux/list/list.actions';

// mui
import { TableCell, Checkbox } from '@material-ui/core';
import { AutoSizer, Column, Table as TableVirt } from 'react-virtualized';

// styles
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import VirtualizedTableStyles from './VirtualizedTableStyles.js';

// memoized vt
const MuiVirtualizedTable = React.memo((props) => {
  const { columns, classes, onRowClick, ...tableProps } = props;
  const state = { headerHeight: 48, rowHeight: 48 };
  const dispatch = useDispatch();
  const { allChecked } = useSelector((state) => state.table);

  // index getter
  const getRespectiveIndex = (e) =>
    Number(
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode
        .childNodes[0].childNodes[0].textContent
    );

  // class getter
  const getRowClassName = ({ index }) => {
    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  // cell renderer
  const cellRenderer = ({ cellData, columnIndex }) => {
    if (columnIndex === 2) {
      return (
        <TableCell
          component="div"
          className={clsx(classes.tableCell, classes.flexContainer, {
            [classes.noClick]: onRowClick == null,
          })}
          variant="body"
          style={{ height: state.rowHeight }}
          align={
            (columnIndex != null && columns[columnIndex].numeric) || false
              ? 'right'
              : 'left'
          }
        >
          <Checkbox
            checked={cellData}
            color="primary"
            onClick={(e) => {
              const id = getRespectiveIndex(e);
              dispatch(toggleSingleListCheck(id));
              dispatch(toggleSingleTableCheck(id));
            }}
            // inputProps={{ 'aria-labelledby': id }}
          />
        </TableCell>
      );
    }
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: state.rowHeight }}
        align={
          (columnIndex != null && columns[columnIndex].numeric) || false
            ? 'right'
            : 'left'
        }
      >
        {cellData}
      </TableCell>
    );
  };

  // header renderer
  const headerRenderer = ({ label, columnIndex }) => {
    if (columnIndex === 2) {
      return (
        <TableCell
          component="div"
          className={clsx(
            classes.tableCell,
            classes.flexContainer,
            classes.noClick
          )}
          variant="head"
          style={{ height: state.headerHeight }}
          align={columns[columnIndex].numeric || false ? 'right' : 'left'}
        >
          <Checkbox
            color="primary"
            checked={allChecked}
            onChange={() => {
              dispatch(toggleAllListCheck());
              dispatch(toggleAllTableCheck());
              // console.log('checkall');
            }}
            inputProps={{ 'aria-label': 'select all' }}
          />
        </TableCell>
      );
    }
    return (
      <TableCell
        component="div"
        className={clsx(
          classes.tableCell,
          classes.flexContainer,
          classes.noClick
        )}
        variant="head"
        style={{ height: state.headerHeight }}
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
      >
        <span>{label}</span>
      </TableCell>
    );
  };

  return (
    <AutoSizer>
      {({ height, width }) => (
        <TableVirt
          height={height}
          width={width}
          rowHeight={state.rowHeight}
          gridStyle={{
            direction: 'inherit',
          }}
          headerHeight={state.headerHeight}
          className={classes.table}
          {...tableProps}
          rowClassName={getRowClassName}
        >
          {columns.map(({ dataKey, ...other }, index) => {
            return (
              <Column
                key={dataKey}
                headerRenderer={(headerProps) =>
                  headerRenderer({
                    ...headerProps,
                    columnIndex: index,
                  })
                }
                className={classes.flexContainer}
                cellRenderer={cellRenderer}
                dataKey={dataKey}
                {...other}
              />
            );
          })}
        </TableVirt>
      )}
    </AutoSizer>
  );
});

// enhance vt with styles
const VirtualizedTable = withStyles(VirtualizedTableStyles)(
  MuiVirtualizedTable
);

export default VirtualizedTable;
