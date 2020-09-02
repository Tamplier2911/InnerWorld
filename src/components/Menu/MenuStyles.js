const menuStyles = (theme) => ({
  box: {
    position: 'fixed',
    minWidth: '25rem',
  },
  menuitem: {
    fontSize: '1.6rem',
    justifyContent: 'center',
    transition: 'color .3s, background-color .3s',
  },
  selected: {
    fontSize: '1.6rem',
    justifyContent: 'center',
    backgroundColor: 'var(--cl-selected)',
    transition: 'color .3s, background-color .3s',
  },
});

export default menuStyles;
