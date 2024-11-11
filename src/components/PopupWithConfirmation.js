import Popup from "./Popup.js";

export default class PopupWithConfirmation {
  constructor(popupSelector) {
    super(popupSelector);
  }

  setAction(action) {
    this._action = action;
  }

  setEventListeners() {
    super.setEventListeners();
  }
}
