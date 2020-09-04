const VirtualizedTableStyles = (theme) => ({
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  table: {
    // temporary right-to-left patch, waiting for
    // https://github.com/bvaughn/react-virtualized/issues/454
    '& .ReactVirtualized__Table__headerRow': {
      flip: false,
      paddingRight: theme.direction === 'rtl' ? '0 !important' : undefined,
    },
  },
  tableRow: {
    cursor: 'pointer',
  },
  tableRowHover: {
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'var(cl-selected)',
    },
  },
  tableCell: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: '1.6rem',
  },
  noClick: {
    cursor: 'initial',
  },
});

export default VirtualizedTableStyles;
