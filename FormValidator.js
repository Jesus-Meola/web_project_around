export default class FormValidator {
  constructor(formElement, settings) {
    this._formElement = formElement;
    this.settings = settings;
    this._inputList = Array.from(
      formElement.querySelectorAll(settings.inputSelector)
    );
  }

  _showInputError(errorMessage) {
    this.errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this.settings.inputErrorClass);
    this.errorElement.textContent = errorMessage;
  }

  _hideInputError() {}

  _hasInvalidInput() {}

  _toggleButtonState() {}

  _checkInputValidity() {}

  _setEventlisteners() {}

  enableValidation() {}
}
