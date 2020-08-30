const INITIAL_STATE = {};

const dummyReducer = (store = INITIAL_STATE, action) => {
  switch (action.payload) {
    default:
      return store;
  }
};

export default dummyReducer;
