import React, { useState } from 'react';

// redux
// import { useDispatch } from 'react-redux';
// import { openPopup } from '../../redux/popup/popup.actions';

// components
import Popup from '../../components/Popup/Popup.jsx';

// mui
import { Box, makeStyles, Button } from '@material-ui/core';

// styles
import popupPageStyles from './PopupPageStyles.js';
const useStyles = makeStyles(popupPageStyles);

const PopupPage = () => {
  const { popuppage, btn } = useStyles();

  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  // const dispatch = useDispatch();
  return (
    <Box className={popuppage} component="section" id="popuppage">
      <Button
        className={btn}
        size="large"
        variant="contained"
        color="primary"
        // onClick={() => dispatch(openPopup())}
        onClick={openPopup}
      >
        Open
      </Button>
      <Popup {...{ popupOpen, closePopup }} />
    </Box>
  );
};

export default PopupPage;
