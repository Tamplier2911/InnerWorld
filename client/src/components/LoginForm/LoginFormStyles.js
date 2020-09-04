const loginFormStyles = (theme) => ({
  container: {
    padding: '2rem',
    maxWidth: '40rem',
    width: '100%',
  },
  header: {
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    '& div:not(:last-child)': {
      marginBottom: '6px',
    },
    '& div': {
      width: '100%',
      '& label': {
        fontSize: '15px',
      },
    },
  },
  btn: {
    fontSize: '1.6rem',
    marginTop: '20px',
  },
});

export default loginFormStyles;
