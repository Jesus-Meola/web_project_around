export default class FormValidator {
  constructor(formElement, settings) {
    this._formElement = document.querySelector(formElement);
    this.settings = settings;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this.settings.inputSelector)
    );
  }

  _showInputError(/*formElement,*/ inputElement, errorMessage /*settings*/) {
    this.errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this.settings.inputErrorClass);
    this.errorElement.textContent = errorMessage;
  }

  _hideInputError(/*formElement,*/ inputElement /*settings*/) {
    this.errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this.settings.inputErrorClass);
    this.errorElement.textContent = "";
  }

  _checkInputValidity(formElement, inputElement, settings) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        /*formElement,*/
        inputElement,
        inputElement.validationMessage
        /*settings*/
      );
    } else {
      this._hideInputError(formElement, inputElement, settings);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      console.log(inputElement.validity);
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
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._setEventListeners(this._formElement, settings);
    });
  }
}
