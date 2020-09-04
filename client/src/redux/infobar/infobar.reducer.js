import infobarTypes from './infobar.types.js';
const { OPEN_INFO_BAR, CLOSE_INFO_BAR } = infobarTypes;

const INITIAL_STATE = {
  isOpen: false,
  message: '',
  severity: '',
};

const infobarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_INFO_BAR:
      return {
        ...state,
        isOpen: true,
        message: action.payload.message,
        severity: action.payload.severity,
      };
    case CLOSE_INFO_BAR:
      return { ...state, isOpen: false, message: '', severity: state.severity };
    default:
      return state;
  }
};

export default infobarReducer;
