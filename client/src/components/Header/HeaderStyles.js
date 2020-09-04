const headerStyles = (theme) => ({
  text: {
    justifySelf: 'center',
  },
  btn: {
    fontSize: '1.6rem',
  },
  toolbarLeft: {
    display: 'flex',
    alignItems: 'center',
    '& span': {
      marginLeft: '10px',
    },
  },
  toolbarMid: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  toolbarRight: {},
});

export default headerStyles;
