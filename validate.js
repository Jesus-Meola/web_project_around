const showInputError = (formElement, inputElement, errorMessage, settings) => {
  console.log("4. se ejecuta si el input es invalido");
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, settings) => {
  console.log("4.1 se ejecuta si el input es valido");
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, settings) => {
  console.log("3. Se ejecuta checkinputvalidity");
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      settings
    );
  } else {
    hideInputError(formElement, inputElement, settings);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// const toggleButtonState = (inputList, buttonElement) => {
//   console.log(hasInvalidInput(inputList));
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add("button_inactive");
//   } else {
//     buttonElement.classList.remove("button_inactive");
//   }
// };

const setEventListeners = (formElement, settings) => {
  console.log("2. se ejecutan los setEventListeners");
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );
  // const buttonElement = formElement.querySelector(".form__submit");
  // toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, settings);
    });
  });
};

const enableValidation = (settings) => {
  console.log("1. ejecutamos enableValidation");
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, settings);
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
