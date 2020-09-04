import popupTypes from './popup.types';
const { OPEN_POPUP, CLOSE_POPUP } = popupTypes;

const INITIAL_STATE = {
  popupOpen: false,
};

const popupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_POPUP:
      return { ...state, popupOpen: true };
    case CLOSE_POPUP:
      return { ...state, popupOpen: false };
    default:
      return state;
  }
};

export default popupReducer;
