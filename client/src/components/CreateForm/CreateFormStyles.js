const createFormStyles = (theme) => ({
  container: {
    padding: '2rem',
    // maxWidth: '40rem',
    width: '100%',
  },
  header: {
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    '& p': {
      fontSize: '14px',
    },
    '& div:not(:last-child)': {
      marginBottom: '6px',
    },
    '& div': {
      width: '100%',
      '& label': {
        fontSize: '15px',
      },
      '& button': {
        width: '48px',
        height: '48px',
      },
    },
  },
  btn: {
    fontSize: '1.6rem',
    marginTop: '20px',
  },
  formBar: {
    display: 'flex',
    '& div:first-child': {
      marginRight: '10px',
      '& button': {
        width: '48px',
        height: '48px',
      },
    },
  },
  formBarInner: { display: 'flex' },
  addBtn: {
    width: '36px',
    height: '36px',
  },
});

export default createFormStyles;
