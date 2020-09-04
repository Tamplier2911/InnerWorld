import popupTypes from './popup.types';
const { OPEN_POPUP, CLOSE_POPUP } = popupTypes;

export const openPopup = () => ({
  type: OPEN_POPUP,
});

export const closePopup = () => ({
  type: CLOSE_POPUP,
});
