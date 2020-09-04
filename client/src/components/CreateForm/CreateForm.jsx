import React, { useState } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser, updateUserData } from '../../redux/users/users.actions';

// validator
import createFormValidator from './CreateFormValidator';

// mui
import {
  Box,
  Paper,
  Typography,
  makeStyles,
  Button,
  TextField,
  IconButton,
} from '@material-ui/core';

import { AddCircle } from '@material-ui/icons';

// styles
import createFormStyles from './CreateFormStyles';
const useStyles = makeStyles(createFormStyles);

const CreateForm = ({ edit }) => {
  const {
    container,
    form,
    header,
    btn,
    formBar,
    formBarInner,
    addBtn,
  } = useStyles();

  const { isLoading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [userCredentials, setUserCredentials] = useState({
    firstName: edit.mode ? edit.obj.firstName : '',
    lastName: edit.mode ? edit.obj.lastName : '',
    phone: edit.mode ? edit.obj.phone : [''],
    email: edit.mode ? edit.obj.email : [''],
  });
  const { firstName, lastName, phone, email } = userCredentials;
  const [fieldErrors, setFieldErrors] = useState({
    isValid: true,
    firstName: '',
    lastName: '',
    phone: [],
    email: [],
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    // validate form input
    const valid = createFormValidator(userCredentials);

    if (!valid.isValid) {
      setFieldErrors({ ...valid });
      return;
    }

    // perform user creation
    if (!edit.mode) dispatch(createNewUser(userCredentials));

    // perform user update
    if (edit.mode) {
      userCredentials._id = edit.obj._id;
      userCredentials.phone = userCredentials.phone.filter((str) => str !== '');
      userCredentials.email = userCredentials.email.filter((str) => str !== '');
      dispatch(updateUserData(userCredentials));
    }

    // reset form inputs
    setUserCredentials({
      firstName: '',
      lastName: '',
      phone: [''],
      email: [''],
    });

    // reset errors
    setFieldErrors({
      isValid: true,
      firstName: '',
      lastName: '',
      phone: [],
      email: [],
    });
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('phone')) {
      return setUserCredentials((userCredentials) => {
        const index = name.slice(-1);
        userCredentials.phone[index] = value;
        return { ...userCredentials };
      });
    } else if (name.startsWith('email')) {
      return setUserCredentials((userCredentials) => {
        const index = name.slice(-1);
        userCredentials.email[index] = value;
        return { ...userCredentials };
      });
    }
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const renderPhoneFields = (arrayOfPhones) => {
    return arrayOfPhones.map((phone, i) => {
      return (
        <TextField
          {...(!fieldErrors.isValid && fieldErrors.phone[i]
            ? { error: true, helperText: fieldErrors.phone[i] }
            : {})}
          {...(i === 0 ? { required: true } : { required: false })}
          className={form}
          id={`createform-phone-${i}`}
          key={`createform-phone-${i}`}
          label="Phone"
          type="tel"
          name={`phone-${i}`}
          value={phone}
          onChange={(e) => onInputChange(e)}
        />
      );
    });
  };

  const renderEmailFields = (arrayOfEmails) => {
    return arrayOfEmails.map((email, i) => {
      return (
        <TextField
          {...(!fieldErrors.isValid && fieldErrors.email[i]
            ? { error: true, helperText: fieldErrors.email[i] }
            : {})}
          {...(i === 0 ? { required: true } : { required: false })}
          className={form}
          id={`createform-email-${i}`}
          key={`createform-email-${i}`}
          label="Email"
          type="email"
          name={`email-${i}`}
          value={email}
          onChange={(e) => onInputChange(e)}
        />
      );
    });
  };

  return (
    <Paper elevation={2} component="div" className={container}>
      <Typography className={header} variant="h4" component="div">
        {edit.mode ? 'Edit users data:' : 'Add new user:'}
      </Typography>
      <Box
        component="form"
        className={form}
        onSubmit={(e) => onFormSubmit(e)}
        autoComplete="off"
      >
        <TextField
          {...(!fieldErrors.isValid && fieldErrors.firstName
            ? { error: true, helperText: fieldErrors.firstName }
            : {})}
          required
          className={form}
          id="createform-firstname"
          label="Frist Name"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => onInputChange(e)}
        />
        <TextField
          {...(!fieldErrors.isValid && fieldErrors.lastName
            ? { error: true, helperText: fieldErrors.lastName }
            : {})}
          required
          className={form}
          id="createform-lastname"
          label="Last Name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => onInputChange(e)}
        />
        <Box className={formBar} component="div">
          <Box className={formBarInner} component="div">
            <Box component="div">{renderPhoneFields(phone)}</Box>
            <IconButton
              color="primary"
              aria-label="add phone field"
              onClick={(e) =>
                setUserCredentials((userCredentials) => {
                  userCredentials.phone.push('');
                  return { ...userCredentials };
                })
              }
            >
              <AddCircle className={addBtn} fontSize="large" />
            </IconButton>
          </Box>
          <Box className={formBarInner} component="div">
            <Box component="div">{renderEmailFields(email)}</Box>
            <IconButton
              color="primary"
              aria-label="add email field"
              onClick={(e) =>
                setUserCredentials((userCredentials) => {
                  userCredentials.email.push('');
                  return { ...userCredentials };
                })
              }
            >
              <AddCircle className={addBtn} fontSize="large" />
            </IconButton>
          </Box>
        </Box>
        <Button
          {...{ disabled: isLoading ? true : false }}
          className={btn}
          type="submit"
          variant="contained"
          color="primary"
        >
          {isLoading ? 'Processing...' : 'Submit'}
        </Button>
      </Box>
    </Paper>
  );
};

export default CreateForm;
