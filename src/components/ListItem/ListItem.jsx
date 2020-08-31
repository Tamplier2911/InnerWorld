import './ListItem.scss';
import React from 'react';

// mui
import { makeStyles, Box, Typography } from '@material-ui/core';

const itemboxShared = {
  display: 'flex',
  border: '1px solid var(--cl-font)',
  borderRadius: '4px',
  padding: '6px 12px',
  boxShadow: '1px 1px 2px 0px var(--cl-shadow)',
  marginBottom: '4px',
  alignItems: 'center',
};
const useStyles = makeStyles((theme) => ({
  itembox: {
    ...itemboxShared,
  },
  itemboxChecked: {
    ...itemboxShared,
    backgroundColor: 'var(--cl-selected)',
  },
  itemcontentLeft: {
    flex: 1,
    fontSize: '1.6rem',
    marginRight: 'auto',
  },
  itemcontentRight: {
    flex: 10,
    fontSize: '1.6rem',
  },
}));

const ListItem = ({ refs, id, content, checked }) => {
  const {
    itembox,
    itemboxChecked,
    itemcontentLeft,
    itemcontentRight,
  } = useStyles();
  return (
    <Box
      className={checked ? itemboxChecked : itembox}
      ref={refs[id]}
      id={id}
      component="div"
    >
      <Typography className={itemcontentLeft} variant="body1">
        {id}.
      </Typography>
      <Typography className={itemcontentRight} variant="body1">
        {content}
      </Typography>
    </Box>
  );
};

export default ListItem;
