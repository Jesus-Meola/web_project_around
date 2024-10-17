import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._formElement = document.querySelector(".popup__form");
    this._inputList = this._formElement.querySelectorAll(".popup__input");
    this._handleFormSubmit = handleFormSubmit;
  }

  getInputValues() {
    this.formValues = {};
    this._inputList.forEach((input) => {
      this.formValues[input.name] = input.value;
    });
    return this.formValues;
  }

  close() {
    super.close();
    this._formElement.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    const form = this._popupElement.querySelector("form");
    form.addEventListener("submit", (evt) => {
      console.log("hola");
      evt.preventDefault();
      this._handleFormSubmit(this.getInputValues());
      super.close();
    });
  }
}
