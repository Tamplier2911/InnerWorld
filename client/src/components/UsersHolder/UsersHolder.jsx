import React, { useState } from 'react';

// redux
import { useSelector } from 'react-redux';

// mui
import {
  Box,
  makeStyles,
  Paper,
  IconButton,
  InputBase,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import {
  SearchOutlined,
  EditOutlined,
  DeleteOutline,
} from '@material-ui/icons';

// styles
import usersHolderStyles from './UsersHolderStyles.js';
const useStyles = makeStyles(usersHolderStyles);

// table heads
const headers = [
  {
    id: 'users-table-header-name',
    label: 'Full name',
    minWidth: 100,
    align: 'center',
  },
  {
    id: 'users-table-header-phones',
    label: 'Phones',
    minWidth: 100,
    align: 'center',
  },
  {
    id: 'users-table-header-actions',
    label: 'Actions',
    minWidth: 50,
    align: 'center',
  },
];

const UsersHolder = ({ setValue, setEdit }) => {
  const {
    container,
    paper,
    form,
    input,
    btn,
    table,
    headCell,
    rowCell,
    tableContainer,
  } = useStyles();
  const [searchInput, setSearchInput] = useState('');

  const { usersList } = useSelector((state) => state.users);

  const onInputChange = (e) => {
    const { value } = e.target;
    setSearchInput(value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    // perform filtering
    // console.log(searchInput);
  };

  let filteredUsers = [...usersList];
  filteredUsers = usersList.filter((userObj) => {
    const val = searchInput.toLowerCase();
    return (
      userObj.firstName.toLowerCase().includes(val) ||
      userObj.lastName.toLowerCase().includes(val) ||
      userObj.email.includes(val) ||
      userObj.phone.includes(val)
    );
  });

  const renderButtons = (userObj) => {
    return (
      <Box component="div">
        <IconButton
          className={btn}
          color="primary"
          aria-label="user edit button"
          onClick={(e) => {
            setValue(0);
            setEdit({ mode: true, obj: userObj });
          }}
        >
          <EditOutlined fontSize="large" />
        </IconButton>
        <IconButton
          className={btn}
          color="primary"
          aria-label="user remove button"
          onClick={(e) => console.log('removed')}
        >
          <DeleteOutline fontSize="large" />
        </IconButton>
      </Box>
    );
  };

  return (
    <Box className={container} component="div">
      <Paper className={paper} elevation={4}>
        <Box
          className={form}
          component="form"
          autoComplete="off"
          onSubmit={(e) => onFormSubmit(e)}
        >
          <IconButton className={btn} type="submit" aria-label="search user">
            <SearchOutlined fontSize="large" />
          </IconButton>
          <InputBase
            className={input}
            id="searchform-field"
            type="text"
            name="searchInput"
            value={searchInput}
            onChange={(e) => onInputChange(e)}
            placeholder="Search respective user..."
            aria-label="search for user"
          />
        </Box>
        <Box className={table} component="div">
          <TableContainer className={tableContainer}>
            <Table stickyHeader aria-label="users table">
              <TableHead>
                <TableRow>
                  {headers.map((header) => {
                    const { id, align, minWidth, label } = header;
                    return (
                      <TableCell
                        className={headCell}
                        key={id}
                        align={align}
                        style={{ minWidth: minWidth }}
                      >
                        {label}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers.map((userObj) => {
                  const { id, firstName, lastName, phone, email } = userObj;
                  return (
                    <TableRow hover key={id}>
                      {headers.map((head, idx) => {
                        return (
                          <TableCell
                            className={rowCell}
                            key={`${id}-${idx}`}
                            align="center"
                          >
                            {idx === 0
                              ? `${firstName} ${lastName}`
                              : idx === 1
                              ? phone.join(', ')
                              : renderButtons(userObj)}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Paper>
    </Box>
  );
};

export default UsersHolder;
