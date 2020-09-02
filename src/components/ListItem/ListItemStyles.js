const ListItemStyles = (theme) => {
  const itemboxShared = {
    display: 'flex',
    border: '1px solid var(--cl-font)',
    borderRadius: '4px',
    padding: '6px 12px',
    boxShadow: '1px 1px 2px 0px var(--cl-shadow)',
    marginBottom: '4px',
    alignItems: 'center',
  };

  return {
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
  };
};

export default ListItemStyles;
