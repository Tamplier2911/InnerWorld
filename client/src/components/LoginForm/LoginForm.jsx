import React, { useState } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { logUserInWithEmailAndPassword } from '../../redux/auth/auth.actions';

// mui
import {
  Box,
  Paper,
  Typography,
  makeStyles,
  Button,
  TextField,
} from '@material-ui/core';

// styles
import loginFormStyles from './LoginFormStyles';

const useStyles = makeStyles(loginFormStyles);

const LoginForm = () => {
  const { container, form, header, btn } = useStyles();
  const [userCredentials, setUserCredentials] = useState({
    email: 'admin@admin.net',
    password: 'admin',
  });
  const { email, password } = userCredentials;

  const onFormSubmit = (e) => {
    e.preventDefault();
    // validate form input
    // console.log(userCredentials);

    // perform login
    dispatch(logUserInWithEmailAndPassword(userCredentials));

    // reset form inputs
    setUserCredentials({
      email: '',
      password: '',
    });
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const dispatch = useDispatch();
  const { isLogged, errorMessage, isLoading } = useSelector(
    (state) => state.auth
  );

  return (
    <Paper elevation={2} component="div" className={container}>
      <Typography className={header} variant="h4" component="div">
        Please, login to proceed:
      </Typography>
      <Box
        component="form"
        className={form}
        onSubmit={(e) => onFormSubmit(e)}
        autoComplete="off"
      >
        <TextField
          required
          className={form}
          id="loginform-email"
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
        />
        <TextField
          required
          className={form}
          id="loginform-password"
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => onInputChange(e)}
        />
        <Button
          {...{ disabled: isLoading ? true : false }}
          className={btn}
          type="submit"
          variant="contained"
          color="primary"
        >
          {isLoading ? 'Processing...' : 'Login'}
        </Button>
      </Box>
    </Paper>
  );
};

export default LoginForm;
