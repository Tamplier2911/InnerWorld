const tabsHolderStyles = (theme) => ({
  container: {
    width: '100%',
  },
  paper: {
    minHeight: '100%',
  },
  tabs: {
    '& div div': {
      justifyContent: 'center',
      backgroundColor: 'var(--cl-selected)',
    },
  },
  tab: {
    flex: 1,
    fontSize: '1.6rem',
  },
});

export default tabsHolderStyles;
