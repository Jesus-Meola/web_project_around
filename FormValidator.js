export default class FormValidator {
  constructor(formElement, settings) {
    this._formElement = document.querySelector(formElement);
    this.settings = settings;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this.settings.inputSelector)
    );
  }

  _showInputError(/*formElement,*/ inputElement, errorMessage /*settings*/) {
    console.log(inputElement);
    this.errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this.settings.inputErrorClass);
    this.errorElement.textContent = errorMessage;
  }

  _hideInputError(/*formElement,*/ inputElement /*settings*/) {
    console.log(inputElement);
    this.errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this.settings.inputErrorClass);
    this.errorElement.textContent = "";
  }

  _checkInputValidity(formElement, inputElement, settings) {
    console.log(inputElement);
    if (!inputElement.validity.valid) {
      this._showInputError(
        /*formElement,*/
        inputElement,
        inputElement.validationMessage
        /*settings*/
      );
    } else {
      this._hideInputError(this._formElement, inputElement, this.settings);
    }
  }

  _hasInvalidInput(inputList) {
    console.log(inputList);
    return inputList.some((inputElement) => {
      console.log(inputElement);
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList, buttonElement) {
    console.log(inputList);
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add("popup__button_disabled");
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove("popup__button_disabled");
      buttonElement.disabled = false;
    }
  }

  _setEventListeners(formElement, settings) {
    console.log(settings);
    this.inputList = Array.from(
      formElement.querySelectorAll(this.settings.inputSelector)
    );
    this.buttonElement = formElement.querySelector(".popup__button");
    this._toggleButtonState(this.inputList, this.buttonElement);

    this.inputList.forEach((inputElement) => {
      console.log(inputElement);
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(
          this._formElement,
          inputElement,
          this.settings
        );
        this._toggleButtonState(this.inputList, this.buttonElement);
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._setEventListeners(this._formElement, this.settings);
    });
  }
}
