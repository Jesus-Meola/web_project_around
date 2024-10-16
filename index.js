import { cardPopup, closePopup, editButton, closeButton } from "./utils.js";

import Card from "./Card.js";

import FormValidator from "./FormValidator.js";

import Popup from "./Popup.js";

// import PopupWithForm from "./PopupWithForm.js";

// import PopupWithImage from "./PopupWithImage.js";

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

export const template = document.querySelector(".template-card");
export const nameInput = document.querySelector(".popup__name");
export const jobInput = document.querySelector(".popup__description");
export const profileText = document.querySelector(".profile__text");
export const profileProfession = document.querySelector(".profile__profession");
const inputCardTitle = document.querySelector(".popup__card-title");
const inputUrl = document.querySelector(".popup__card-url");
const cardZone = document.querySelector(".elements");
const formCardPopup = document.querySelector(".popup__card-form");
export const popupOverlay = document.querySelectorAll(".popup__overlay");

initialCards.forEach(function (element) {
  const newCard = new Card(element.name, element.link).generateCard();
  cardZone.append(newCard);
});

formCardPopup.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const newCardToAdd = new Card(
    inputCardTitle.value,
    inputUrl.value
  ).generateCard();
  cardZone.prepend(newCardToAdd);

  closePopup(cardPopup);
});

// popupOverlay.forEach((overlay) => {
//   overlay.addEventListener("click", () => {
//     overlay.parentNode.classList.remove("popup__open");
//   });
// });

const formProfile = new FormValidator(".popup__profile-form", {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error-visible",
});

const formCard = new FormValidator(".popup__card-form", {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error-visible",
});

formProfile.enableValidation();
formCard.enableValidation();

const popupProfile = new Popup("#popup-profile");

popupProfile.setEventListeners();

// editButton.addEventListener("click", () => {
//   popupProfile.open();
// });

// closeButton.addEventListener("click", () => {
//   popupProfile.close();
// });
