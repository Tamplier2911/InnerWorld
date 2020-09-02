import './HomePage.scss';
import React from 'react';

// redux
import { useDispatch } from 'react-redux';
import { openPopup } from '../../redux/popup/popup.actions';

// components
import Popup from '../../components/Popup/Popup.jsx';

// mui
import { Box, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  popuppage: {
    height: '85vh',
    display: 'flex',
    padding: '8px 0px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    fontSize: '1.6rem',
  },
}));

const HomePage = () => {
  const { popuppage, btn } = useStyles();
  const dispatch = useDispatch();
  return (
    <Box className={popuppage} component="section" id="homepage">
      <Button
        className={btn}
        size="large"
        variant="contained"
        color="primary"
        onClick={() => dispatch(openPopup())}
      >
        Open
      </Button>
      <Popup />
    </Box>
  );
};

export default HomePage;
