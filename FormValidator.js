class FormValidator {
  constructor(formElement, settings) {
    this._formElement = formElement;
    this.settings = settings;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this.settings.inputSelector)
    );
  }
  showInputError(errorMessage) {
    this.errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this.settings.inputErrorClass);
    this.errorElement.textContent = errorMessage;
  }
  hideInputError() {}
  checkInputValidity() {}
  hasInvalidInput() {}
  toggleButtonState() {}
  setEventlisteners() {}
  enableValidation() {}
}
