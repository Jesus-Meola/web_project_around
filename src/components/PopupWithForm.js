import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._formElement = this._popupElement.querySelector(".popup__form");
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
      evt.preventDefault();
      const button = form.querySelector("[type=submit]");
      const textTem = button.textContent;
      button.textContent = "Guardando...";
      this._handleFormSubmit(this.getInputValues()).then(() => {
        button.textContent = textTem;
        this.close();
      });
    });
  }
}
