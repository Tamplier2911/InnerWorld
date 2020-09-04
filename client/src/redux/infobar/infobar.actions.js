import infobarTypes from './infobar.types.js';
const { OPEN_INFO_BAR, CLOSE_INFO_BAR } = infobarTypes;

/**
 *
 * @param {object} dataObject - contains required for infobar data.
 * dataObject interface:
 * severity - string - either of following "error" "wraning" "success" "info"
 * message - string - message that we want to produce to user
 *
 */

export const openInfoBar = (dataObject) => ({
  type: OPEN_INFO_BAR,
  payload: dataObject,
});

export const closeInfoBar = () => ({
  type: CLOSE_INFO_BAR,
});
