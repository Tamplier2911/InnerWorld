import React from 'react';

// mui
import {
  Box,
  makeStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';

// styles
import dialogFeedStyles from './DialogFeedStyles.js';
const useStyles = makeStyles(dialogFeedStyles);

const DialogFeed = ({ open, onClose, action, title, text }) => {
  const { titlestyle, textstyle, btn } = useStyles();

  return (
    <Box component="div">
      <Dialog
        open={open}
        onClose={() => onClose()}
        aria-labelledby="alert-dialog-attention"
        aria-describedby="alert-dialog-remove-user"
      >
        <DialogTitle className={titlestyle} id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText className={textstyle}>{text}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            className={btn}
            onClick={onClose}
            variant="outlined"
            color="primary"
          >
            Back
          </Button>
          <Button
            className={btn}
            onClick={action}
            variant="outlined"
            color="secondary"
            autoFocus
          >
            Proceed
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DialogFeed;
