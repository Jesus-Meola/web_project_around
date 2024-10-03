export default class FormValidator {
  constructor(formElement, settings) {
    this._formElement = document.querySelector(formElement);
    this.settings = settings;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this.settings.inputSelector)
    );
  }

  _showInputError(errorMessage) {
    this.errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this.settings.inputErrorClass);
    this.errorElement.textContent = errorMessage;
  }

  _hideInputError(errorMessage) {
    this.errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this.settings.inputErrorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(formElement, settings) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        settings
      );
    } else {
      this._hideInputError(formElement, settings);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add("popup__button_disabled");
    } else {
      buttonElement.classList.remove("popup__button_disabled");
    }
  }

  _setEventListeners(formElement, settings) {
    this.inputList = Array.from(
      formElement.querySelectorAll(this.settings.inputSelector)
    );
    this.buttonElement = formElement.querySelector(".popup__button");
    this._toggleButtonState(this.inputList, this.buttonElement);

    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(formElement, inputElement, settings);
        this._toggleButtonState(this.inputList, this.buttonElement);
      });
    });
  }

  enableValidation(settings) {
    this.formList = Array.from(
      document.querySelectorAll(this.settings.formSelector)
    );
    this.formList.forEach((formElement) => {
      formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });
      console.log(this);
      this._setEventListeners(formElement, settings);
    });
  }
}
