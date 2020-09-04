import React from 'react';

// mui
import { makeStyles, Box, Typography } from '@material-ui/core';

// styles
import ListItemStyles from './ListItemStyles.js';
const useStyles = makeStyles(ListItemStyles);

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
