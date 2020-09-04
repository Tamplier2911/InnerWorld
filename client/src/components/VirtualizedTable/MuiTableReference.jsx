/*
import './TableHolder.scss';
import React, { useState } from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleListItemChecked,
  checkAllItems,
  uncheckAllItems,
} from '../../redux/list/list.actions';

// mui
import {
  Box,
  Paper,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  box: {
    width: '100%',
    overflowY: 'scroll',
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  paper: {
    width: '100%',
    padding: '6px',
  },
  table: {},
  th: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
  },
  tr: {
    fontSize: '1.5rem',
    textAlign: 'start',
  },
}));

// Don't bother reading this leaving basic table setup for future references 

const TableHolder = () => {
  const { box, paper, table, th, tr } = useStyles();
  const { listItems } = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const headCells = [
    { id: 'headId', numeric: false, disablePadding: false, label: 'Item ID' },
    {
      id: 'headText',
      numeric: false,
      disablePadding: true,
      label: 'Item Content',
    },
  ];

  return (
    <Box className={box} component="div">
      <Paper className={paper}>
        <TableContainer>
          <Table className={table} aria-labelledby="table-title">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    onChange={() => {
                      if (checked) {
                        dispatch(uncheckAllItems());
                        setChecked(false);
                      } else {
                        dispatch(checkAllItems());
                        setChecked(true);
                      }
                    }}
                    inputProps={{ 'aria-label': 'select all' }}
                  />
                </TableCell>
                {headCells.map(({ id, numeric, disablePadding, label }) => {
                  return (
                    <TableCell
                      className={th}
                      key={id}
                      align={numeric ? 'right' : 'left'}
                      // padding={disablePadding ? 'none' : 'default'}
                      padding="default"
                    >
                      {label}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>

            <TableBody>
              {listItems.map(({ id, content, checked }) => {
                return (
                  <TableRow
                    hover
                    onClick={
                      (e) => dispatch(toggleListItemChecked(id)) // console.log(e, id)
                    }
                    role="checkbox"
                    key={id}
                    aria-checked={checked}
                    color="primary"
                    selected={checked}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={checked}
                        color="primary"
                        inputProps={{ 'aria-labelledby': id }}
                      />
                    </TableCell>
                    <TableCell
                      className={tr}
                      // component="th"
                      // id={id}
                      // scope="row"
                      // padding="none"
                    >
                      {id}
                    </TableCell>
                    <TableCell className={tr} align="right">
                      {content}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default TableHolder;

*/
