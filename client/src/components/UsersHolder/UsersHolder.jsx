import React, { useState, useContext } from 'react';

// redux
// import { useDispatch, useSelector } from 'react-redux';
// import { removeUser } from '../../redux/users/users.actions.js';

// context
import UsersContext from '../../contexts/usersContext.js';
import InfoContext from '../../contexts/infoContext.js';

// components
import DialogFeed from '../DialogFeed/DialogFeed.jsx';

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

import { Skeleton } from '@material-ui/lab';

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

const skiletons = [
  {
    id: 'skileton-users-table-1',
  },
  {
    id: 'skileton-users-table-2',
  },
  {
    id: 'skileton-users-table-3',
  },
  {
    id: 'skileton-users-table-4',
  },
];

const UsersHolder = ({ setValue, setEdit }) => {
  // styles
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

  // redux
  // const { usersList, isLoading } = useSelector((state) => state.users);
  // const dispatch = useDispatch();

  const { usersList, removeUser, isLoading } = useContext(UsersContext);
  const { openInfoBar } = useContext(InfoContext);

  // inner state
  const [searchInput, setSearchInput] = useState('');
  const [dialogOpen, setDialogOpen] = useState({
    open: false,
    onClose: null,
    action: null,
    title: '',
    text: '',
  });

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
          onClick={(e) => {
            const resetObj = {
              open: false,
              onClose: null,
              action: null,
              title: '',
              text: '',
            };
            // open popup
            setDialogOpen({
              open: true,
              onClose: () => setDialogOpen(resetObj),
              action: () => {
                // dispatch(removeUser(userObj));
                removeUser(userObj, openInfoBar);
                setDialogOpen(resetObj);
              },
              title: 'Attention!',
              text: `This action cannot be undone! Are you sure that you want to remove ${userObj.firstName} ${userObj.lastName} from databse?`,
            });
          }}
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
                {isLoading
                  ? skiletons.map((obj, i) => {
                      const { id } = obj;
                      return (
                        <TableRow key={`${id}-${i}`}>
                          {headers.map((head, idx) => {
                            return (
                              <TableCell
                                className={rowCell}
                                key={`${id}-${idx}`}
                                align="center"
                              >
                                <Skeleton variant="text" key={id} />
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })
                  : filteredUsers.map((userObj) => {
                      const {
                        // _id,
                        id,
                        firstName,
                        lastName,
                        phone,
                        email,
                      } = userObj;
                      return (
                        <TableRow hover /*key={_id}*/ key={id}>
                          {headers.map((head, idx) => {
                            return (
                              <TableCell
                                className={rowCell}
                                key={`${/*_id*/ id}-${idx}`}
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
      <DialogFeed {...dialogOpen} />
    </Box>
  );
};

export default UsersHolder;
