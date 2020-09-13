import React, { useContext } from 'react';

// redux
// import { useDispatch, useSelector } from 'react-redux';
// import { closeInfoBar } from '../../redux/infobar/infobar.actions';

// context
import InfoContext from '../../contexts/infoContext.js';

// mui
import { Box, makeStyles, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

// styles
import infobarStyles from './InfoBarStyles.js';
const useStyles = makeStyles(infobarStyles);

const InfoBar = () => {
  const { container, snackbar, alert } = useStyles();
  // const { isOpen, message, severity } = useSelector((state) => state.infobar);
  // const dispatch = useDispatch();

  const { isOpen, message, severity, closeInfoBar } = useContext(InfoContext);

  const handleClick = (e, reason) => {
    if (reason === 'clickaway') {
      // dispatch(closeInfoBar());
      closeInfoBar();
    } else if (reason === 'timeout') {
      // dispatch(closeInfoBar());
      closeInfoBar();
    }
  };
  return (
    <Box component="div" className={container}>
      <Snackbar
        className={snackbar}
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleClick}
      >
        <Alert
          className={alert}
          elevation={6}
          variant="filled"
          severity={severity}
        >
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default InfoBar;
