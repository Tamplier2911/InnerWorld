import React, { createRef } from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { closePopup } from '../../redux/popup/popup.actions';

// components
import ListItem from '../ListItem/ListItem.jsx';

// mui
import {
  makeStyles,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';

import { Pagination, PaginationItem } from '@material-ui/lab';

// styles
import popupStyles from './PopupStyles.js';
const useStyles = makeStyles(popupStyles);

const Popup = () => {
  const { dialogContent, btn, pagebtn, pagebtnChecked } = useStyles();

  const { popupOpen } = useSelector((state) => state.popup);
  const { listItems } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  // filtered checked items
  const checkedIds = [];
  listItems.forEach((obj) => {
    if (obj.checked) checkedIds.push(obj.id);
  });

  // create refs
  const refs = listItems.reduce(
    (acc, obj) => ((acc[obj.id] = createRef()), acc),
    {}
  );

  // on click handler
  const onPageClick = (event, value) => {
    refs[value].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <Dialog
      onClose={() => dispatch(closePopup())}
      open={popupOpen}
      aria-labelledby="data-bars"
      fullWidth={true}
    >
      <DialogTitle>
        <Pagination
          count={listItems.length}
          variant="outlined"
          shape="rounded"
          onChange={onPageClick}
          renderItem={(item) => {
            const isItemChecked = checkedIds.includes(item.page);
            return (
              <PaginationItem
                {...item}
                className={isItemChecked ? pagebtnChecked : pagebtn}
                color={isItemChecked ? 'primary' : 'standard'}
              />
            );
          }}
        />
      </DialogTitle>
      <DialogContent dividers className={dialogContent}>
        {listItems.map((el) => {
          const { id, content, checked } = el;
          return (
            <ListItem
              refs={refs}
              id={id}
              key={id}
              content={content}
              checked={checked}
            />
          );
        })}
      </DialogContent>
      <DialogActions>
        <Button
          className={btn}
          size="large"
          variant="outlined"
          color="primary"
          onClick={() => dispatch(closePopup())}
        >
          Cancel
        </Button>
        <Button
          className={btn}
          size="large"
          variant="contained"
          color="primary"
          onClick={() => dispatch(closePopup())}
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;
